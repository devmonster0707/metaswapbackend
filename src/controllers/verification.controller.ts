import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import Container from 'typedi';
import { VerificationService } from '@/services/verification.service';
import { VerificationRequestDto } from '@/dtos/verification.dto';
import { Verification as VerificationView } from '@/interfaces/verification.interface';
import * as fs from 'fs';
import * as path from 'path';
import FormData from 'form-data';

import axios from 'axios'

const BASE_URL = 'https://kyc-api.amlbot.com'

const apiToken = '9967e527197ea04e8a1af992ab7303b357ba';

const STORAGE_DIR = path.join(__dirname, '../../storage');

const form_id = 'b548341a1dab0045d6283f13c34d03842f1f'

const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Token ${apiToken}`,
    'Content-Type': 'application/json',
  },
})

export class VerificationController {
  public verification = Container.get(VerificationService);

  public async getVerificatiion(req: RequestWithUser, res: Response, _next: NextFunction): Promise<void> {

    const verification = await this.verification.getVerification(req.user.id);

    res.json(verification);
  }

  public async requestVerification(req: RequestWithUser, res: Response, _next: NextFunction) {
    const body = req.body;
    // console.log("req.body: ", req.body);
    // console.log("req.files: ", req.files);
    if (body instanceof VerificationRequestDto === false) {
      throw new Error('body: VerificationRequestDto required');
    }

    if (!req.files) {
      res.status(400).json({
        message: 'files required',
      });
      return;
    }

    const photoDocFile = req.files['photoDoc']?.[0] as Express.Multer.File;
    if (!photoDocFile) {
      res.status(400).json({
        message: 'photoDoc required',
      });
      return;
    }
    const photoUserWithDocFile = req.files['photoUserWithDoc']?.[0] as Express.Multer.File;
    if (!photoUserWithDocFile) {
      res.status(400).json({
        message: 'photoUserWithDoc required',
      });
      return;
    }

    const date = new Date()
    const extArr = photoDocFile.originalname.split('.')
    const fileExt = extArr[extArr.length - 1]
    let filename = photoDocFile.originalname.split('.')[0]
    filename = filename.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    filename =  filename + date.getTime()
    const generatedFileName = `${filename}.${fileExt}`

    const extArrWithPhoto = photoDocFile.originalname.split('.')
    const fileExtWithPhto = extArrWithPhoto[extArrWithPhoto.length - 1]
    let filenameWithPhoto = photoDocFile.originalname.split('.')[0]
    filenameWithPhoto = filenameWithPhoto.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    filenameWithPhoto =  filenameWithPhoto + date.getTime()
    const generatedFileNameWithPhto = `${filenameWithPhoto}.${fileExtWithPhto}`

    const storagePhotoDocPath = path.join(STORAGE_DIR, generatedFileName);
    const storagePhotoUserWithDocPath = path.join(STORAGE_DIR, generatedFileNameWithPhto);

    // Ensure the storage directory exists
    await fs.promises.mkdir(STORAGE_DIR, { recursive: true });

    // Move uploaded files to storage
    await Promise.all([
      saveFileToStorage(photoDocFile, storagePhotoDocPath),
      saveFileToStorage(photoUserWithDocFile, storagePhotoUserWithDocPath),
    ]);


    // let verification: VerificationView;
    // try {
    //   verification = await this.verification.requestVerification({
    //     userId: req.user.id,
    //     firstName: body.firstName,
    //     lastName: body.lastName,
    //     docId: body.docId,
    //   });
    // } finally {
    //   await clearFiles();
    // }

    // res.json();
    
    let applicant_id = ''

    // await customAxios.post('/applicants', {
    //   type: 'PERSON',
    //   first_name: body.firstName,
    //   last_name: body.lastName,
    //   dob: '1970-10-25',
    //   residence_country: 'GB',
    //   email: 'forever981123@gmail.com'
    // })
    // .then((response) => {
    //   console.log("here==========", response.data);  // Handle success response
    //   // res.json(response.data)
    //   applicant_id = response.data.applicant_id
    // })
    // .catch((error) => {
    //   console.error("errorrrrrrrrrrrrrrrrr", error.response ? error.response.data : error.message);  // Handle error
    //   res.json("error")
    // });
    // res.json("success")
    // const form = new FormData();

    // form.append('file', req.files['photoDoc']);

    // // Append other form fields if required
    // form.append('fieldName', 'value');

    // // Send POST request to the API
    // await axios.post('https://kyc-api.amlbot.com/files', form,
    //   {
    //   headers: {
    //     'Authorization': `Token ${apiToken}`,
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })
    // .then((response) => {
    //   console.log(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    //   res.json("error")
    // });

  }

  public async getFormUrl(req:RequestWithUser, res, _next: NextFunction) {
    
    await customAxios.post('/forms/'+form_id+'/urls', {
      external_applicant_id: req.user.id
    })
    .then((responseValue) => {
      console.log("here==========", responseValue);  // Handle success response
      const data = {
        'form_url': responseValue.data.form_url
      }
      res.status(200).json(data)
    })
    .catch((error) => {
      console.error("errorrrrrrrrrrrrrrrrr", error.response ? error.response.data : error.message);  // Handle error
      res.status(400).json(error.message)
    });
  }
}

function validatePhotoMime(file: Express.Multer.File) {
  switch (file.mimetype) {
    case 'image/tiff':
    case 'image/jpeg':
    case 'image/png': {
      return true;
    }
    default: {
      return false;
    }
  }
}

async function saveFileToStorage(file: Express.Multer.File, destinationPath: string) {
  return new Promise<void>((resolve, reject) => {
    const readStream = fs.createReadStream(file.path);
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(writeStream);
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

// Utility function to delete files from storage (optional)
async function deleteFiles(filePaths: string[]) {
  return Promise.all(filePaths.map(filePath => fs.promises.unlink(filePath)));
}

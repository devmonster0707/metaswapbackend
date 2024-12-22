# Getting Started
### prisma

`npx prisma migrate reset`


# swap-rates
	route: /swap-rates
	request(payload): {"sourceCurrency": "BTC", "destinationCurrency": "ETH"}
	response:	{
					"kind": "OK",
    				"rate": 23.64899182
				}


# swap-creates
	route: /swap-creates
	request(payload): {"sourceCurrency": "ETH", "destinationCurrency": "USDT", "amount": 1}
	response:	{
					"kind": "API_ERROR",
    				"message": "Not enough funds for processing withdrawal by service fee. Available balance by currency: 0.000000 ETH. Service fee : 0.003000 ETH. You need more: -1.003000 ETH."
				}

# swap
	route: /swaps
	method: GET
	request(query): {"id": 134324324}
	response:	{
					"kind": "API_ERROR",
    				"message": "Exchange.id:1 for account:0x1831c1037f39e7ffc074c5fc7f8f824917d6a33b not found"
				}

# swap-display
	route: /swap-display
	method: POST
	request(payload): {"sourceCurrency": "ETH", "destinationCurrency": "USDT", "amount": 1}
	response:	{
					"kind": "OK",
				    "estimateResult": {
				        "sourceCurrency": "ETH",
				        "destinationCurrency": "USDT",
				        "amount": 2359.0597254
					}
				}


# swap-currencies
	route: /swap-currencies
	request(payload): null
	response:	{
				    "kind": "OK",
				    "currencyPairs": [
				        {
				            "name": "LTC",
				            "pairs": [
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "EUR",
				                "USD",
				                "BTC",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "ETH"
				            ]
				        },
				        {
				            "name": "USDT",
				            "pairs": [
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "LTC",
				                "TRX",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "EUR",
				                "DAI",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC"
				            ]
				        },
				        {
				            "name": "EUR",
				            "pairs": [
				                "LTC",
				                "TRX",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "DAI",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC"
				            ]
				        },
				        {
				            "name": "USD",
				            "pairs": [
				                "LTC",
				                "TRX",
				                "BTC",
				                "ETH",
				                "BNB",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "DAI",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC"
				            ]
				        },
				        {
				            "name": "BTC",
				            "pairs": [
				                "LTC",
				                "TRX",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "USD",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "EUR",
				                "ETH",
				                "BNB",
				                "XDG"
				            ]
				        },
				        {
				            "name": "USDC",
				            "pairs": [
				                "USDC_TRX",
				                "USDC_MATIC",
				                "LTC",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "EUR"
				            ]
				        },
				        {
				            "name": "ETH",
				            "pairs": [
				                "LTC",
				                "BTC",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "USD",
				                "EUR",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC"
				            ]
				        },
				        {
				            "name": "TRX",
				            "pairs": [
				                "EUR",
				                "USD",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "BTC"
				            ]
				        },
				        {
				            "name": "BNB",
				            "pairs": [
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "EUR",
				                "USD",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "BTC"
				            ]
				        },
				        {
				            "name": "XDG",
				            "pairs": [
				                "BTC",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "EUR",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC"
				            ]
				        },
				        {
				            "name": "DAI",
				            "pairs": [
				                "USD",
				                "EUR",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC"
				            ]
				        },
				        {
				            "name": "USDT_TRX",
				            "pairs": [
				                "USDT_BSC",
				                "USDT_MATIC",
				                "LTC",
				                "TRX",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "EUR",
				                "DAI",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "USDT"
				            ]
				        },
				        {
				            "name": "USDT_BSC",
				            "pairs": [
				                "USDT_TRX",
				                "USDT_MATIC",
				                "LTC",
				                "TRX",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "EUR",
				                "DAI",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "USDT"
				            ]
				        },
				        {
				            "name": "USDT_MATIC",
				            "pairs": [
				                "USDT_TRX",
				                "USDT_BSC",
				                "LTC",
				                "TRX",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "EUR",
				                "DAI",
				                "USDC",
				                "USDC_TRX",
				                "USDC_MATIC",
				                "USDT"
				            ]
				        },
				        {
				            "name": "USDC_TRX",
				            "pairs": [
				                "USDC_MATIC",
				                "LTC",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "EUR",
				                "USDC"
				            ]
				        },
				        {
				            "name": "USDC_MATIC",
				            "pairs": [
				                "USDC_TRX",
				                "LTC",
				                "BTC",
				                "ETH",
				                "BNB",
				                "XDG",
				                "USD",
				                "USDT",
				                "USDT_TRX",
				                "USDT_BSC",
				                "USDT_MATIC",
				                "EUR",
				                "USDC"
				            ]
				        }
				    ]
				}


#	/account/get-alluser
	permission:	ADMIN
	method: GET
	request: null
	response:	{
					"users": [
				        {
				            "id": 1,
				            "publicId": "36",
				            "telegramUserId": "13",
				            "telegramUsername": null,
				            "telegramPhoto": null,
				            "telegramPhotoMime": null,
				            "firstName": "robin",
				            "lastName": null,
				            "language": null,
				            "email": null,
				            "priceCurrency": null,
				            "totpSecret": null,
				            "userRole": "USER",
				            "userPermission": "UNBLOCK",
				            "adminPermission": "UNBLOCK",
				            "createdAt": "2024-09-07T14:17:48.697Z",
				            "Asset": [],
				            "Transaction": [],
				            "internalTransferUserOutputs": [],
				            "internalTransferUserInputs": [],
				            "Autoconvert": [],
				            "verification": null,
				            "verificationRequests": [],
				            "emailUpdateRequests": [],
				            "deposits": [],
				            "payouts": [],
				            "frozenAmounts": [],
				            "freezeTransactions": [],
				            "unfreezeTransactions": [],
				            "Swaps": [
				                {
				                    "id": 1,
				                    "sourceCurrency": "ETH",
				                    "destinationCurrency": "USDT",
				                    "sourceAmount": 1,
				                    "destinationAmount": 2400,
				                    "userId": 1,
				                    "hashId": "134545353",
				                    "createdAt": "2024-09-07T05:21:53.279Z",
				                    "state": "IN_PROGRESS"
				                }
				            ]
				        },
				        {
				            "id": 2,
				            "publicId": "78",
				            "telegramUserId": "7",
				            "telegramUsername": null,
				            "telegramPhoto": null,
				            "telegramPhotoMime": null,
				            "firstName": "koval",
				            "lastName": null,
				            "language": null,
				            "email": null,
				            "priceCurrency": null,
				            "totpSecret": null,
				            "userRole": "USER",
				            "userPermission": "UNBLOCK",
				            "adminPermission": "UNBLOCK",
				            "createdAt": "2024-09-07T14:18:08.363Z",
				            "Asset": [],
				            "Transaction": [],
				            "internalTransferUserOutputs": [],
				            "internalTransferUserInputs": [],
				            "Autoconvert": [],
				            "verification": null,
				            "verificationRequests": [],
				            "emailUpdateRequests": [],
				            "deposits": [],
				            "payouts": [],
				            "frozenAmounts": [],
				            "freezeTransactions": [],
				            "unfreezeTransactions": [],
				            "Swaps": []
				        }
			    	]
			}

# /account/update-user-permission
	permission:	ADMIN
	method: POST
	request(body): {"userId": 1, "permission": "BLOCK" | "UNBLOCK"}
	response:	{
					"kind": "OK",
				    "message": "user permission updated",
				    "user": {
				        "id": 1,
				        "publicId": "36",
				        "telegramUserId": "13",
				        ....
				        "userRole": "USER",
				        "userPermission": "UNBLOCK" | "BLOCK",
				        "createdAt": "2024-09-07T14:17:48.697Z"
				    }
				}

# /transactions
	permission: ADMIN
	method:	GET
	request:	Null
	response:	{
					"items": [],
				    "nextToken": null
				}

-------------------------------------------------------------------------

#	/fees
	permission:	ADMIN
	method: POST
	request(body):	{"type": "EXCHANGE" | "SEND" | "RECEIVE", "amount": 1.5}
	response:	{
					"kind": "OK",
				    "fee": {
				        "id": 7,
				        "type": "EXCHANGE",
				        "amount": 1.5,
				        "createdAt": "2024-09-09T09:45:17.727Z"
				    }
				}

#	/fees
	permission:	USER
	method: GET
	request: Null
	response:	{
					"kind": "OK",
				    "fees": [
				        {
				            "id": 5,
				            "type": "SEND",
				            "amount": 7.5,
				            "createdAt": "2024-09-09T04:49:34.526Z"
				        },
				        {
				            "id": 7,
				            "type": "EXCHANGE",
				            "amount": 1.5,
				            "createdAt": "2024-09-09T09:45:17.727Z"
				        }
				    ]
				}

#	/get-fee
	permission:	USER
	method: GET
	request(query):	{"type": "SEND" | "RECEIVE" | "EXCHANGE"}
	response:	{
					"kind": "OK",
				    "fee": {
				        "id": 5,
				        "type": "SEND",
				        "amount": 7.5,
				        "createdAt": "2024-09-09T04:49:34.526Z"
				    }
				}

# /fees/update
	permission: ADMIN
	method: POST
	request(body):	{"type": "SEND" | "RECEIVE" | "EXCHANGE", "amount": 7.5}
	response:	{
					"kind": "OK",
				    "fee": {
				        "id": 5,
				        "type": "SEND",
				        "amount": 7.5,
				        "createdAt": "2024-09-09T04:49:34.526Z"
				    }
				}

#	/fees
	permission: ADMIN
	method: DELETE
	request(query):	{"type": "SEND" | "RECEIVE" | "EXCHANGE"}
	response:	{
					"kind": "OK",
				    "fee": {
				        "id": 4,
				        "type": "SEND",
				        "amount": 1.5,
				        "createdAt": "2024-09-09T04:49:02.552Z"
				    }
				}

# /news
	permission: ADMIN
	method: POST
	request(body):	{"title": "second title", "content": "second content"}
	response:	{
					"kind": "OK",
				    "news": {
				        "id": 7,
				        "userId": 1,
				        "title": "second title",
				        "content": "second content",
				        "createdAt": "2024-09-09T10:04:22.718Z"
				    }
				}

#	/news
	permission: USER
	method: GET
	request:	Null
	response:	{
					"kind": "OK",
				    "news": [
				        {
				            "id": 2,
				            "userId": 1,
				            "title": "ten title",
				            "content": "ten content",
				            "createdAt": "2024-09-09T05:45:55.066Z"
				        },
				        {
				            "id": 4,
				            "userId": 1,
				            "title": "third title",
				            "content": "third content",
				            "createdAt": "2024-09-09T06:48:47.478Z"
				        }
				    ]
				}

#	/get-news
	permission:	USER
	method: GET
	request(query):	{"id": 4}
	response:	{
					"kind": "OK",
				    "news": {
				        "id": 4,
				        "userId": 1,
				        "title": "third title",
				        "content": "third content",
				        "createdAt": "2024-09-09T06:48:47.478Z"
				    }
				}

#	/news/update
	permission:	ADMIN
	method:	POST
	request(body):	{"id": 2, "title": "ten title", "content": "ten content"}
	response:	{
					"kind": "OK",
				    "news": {
				        "id": 2,
				        "userId": 1,
				        "title": "ten title",
				        "content": "ten content",
				        "createdAt": "2024-09-09T05:45:55.066Z"
				    }
				}

#	/news
	permission:	ADMIN
	method:	DELETE
	request(body):	{"id": 3}
	response:	{
					"kind": "OK",
				    "news": {
				        "id": 3,
				        "userId": 1,
				        "title": "second title",
				        "content": "second content",
				        "createdAt": "2024-09-09T06:47:49.061Z"
				    }
				}

#	/documents
	permission: ADMIN
	method: POST
	request(body):	{"title": "second title", "content": "second content"}
	response:	{
					"kind": "OK",
				    "documents": {
				        "id": 7,
				        "userId": 1,
				        "title": "second title",
				        "content": "second content",
				        "createdAt": "2024-09-09T10:04:22.718Z"
				    }
				}

# /documents
	permission: USER
	method: GET
	request:	Null
	response:	{
					"kind": "OK",
				    "documents": [
				        {
				            "id": 2,
				            "userId": 1,
				            "title": "ten title",
				            "content": "ten content",
				            "createdAt": "2024-09-09T05:45:55.066Z"
				        },
				        {
				            "id": 4,
				            "userId": 1,
				            "title": "third title",
				            "content": "third content",
				            "createdAt": "2024-09-09T06:48:47.478Z"
				        }
				    ]
				}

# /get-documents
	permission:	USER
	method: GET
	request(query):	{"id": 4}
	response:	{
					"kind": "OK",
				    "documents": {
				        "id": 4,
				        "userId": 1,
				        "title": "third title",
				        "content": "third content",
				        "createdAt": "2024-09-09T06:48:47.478Z"
				    }
				}

#	/documents/update
	permission:	ADMIN
	method:	POST
	request(body):	{"id": 2, "title": "ten title", "content": "ten content"}
	response:	{
					"kind": "OK",
				    "documents": {
				        "id": 2,
				        "userId": 1,
				        "title": "ten title",
				        "content": "ten content",
				        "createdAt": "2024-09-09T05:45:55.066Z"
				    }
				}

#	/documents
	permission:	ADMIN
	method:	DELETE
	request(body):	{"id": 3}
	response:	{
					"kind": "OK",
				    "documents": {
				        "id": 3,
				        "userId": 1,
				        "title": "second title",
				        "content": "second content",
				        "createdAt": "2024-09-09T06:47:49.061Z"
				    }
				}



#	/account/get-user
	permission:	ADMIN
	method: GET
	request(query): {"userId": 1}
	response:	{
				    "id": 1,
				    "publicId": "36",
				    "telegramUserId": "13",
				    "telegramUsername": null,
				    "telegramPhoto": null,
				    "telegramPhotoMime": null,
				    "firstName": "robin",
				    "lastName": null,
				    "language": null,
				    "email": null,
				    "priceCurrency": null,
				    "totpSecret": null,
				    "userRole": "USER",
				    "userPermission": "UNBLOCK",
				    "adminPermission": "UNBLOCK",
				    "createdAt": "2024-09-07T14:17:48.697Z",
				    "Asset": [],
				    "Transaction": [],
				    "internalTransferUserOutputs": [],
				    "internalTransferUserInputs": [],
				    "Autoconvert": [],
				    "verification": null,
				    "verificationRequests": [],
				    "emailUpdateRequests": [],
				    "deposits": [],
				    "payouts": [],
				    "frozenAmounts": [],
				    "freezeTransactions": [],
				    "unfreezeTransactions": [],
				    "Swaps": [
				        {
				            "id": 1,
				            "sourceCurrency": "ETH",
				            "destinationCurrency": "USDT",
				            "sourceAmount": 1,
				            "destinationAmount": 2400,
				            "userId": 1,
				            "hashId": "134545353",
				            "createdAt": "2024-09-07T05:21:53.279Z",
				            "state": "IN_PROGRESS"
				        }
				    ]
				}

--------------------------------------------------------------

#	/account/update-admin-permission
	permission:	SUPER
	method:	POST
	request(payload): {"userId": 1, "permission": "BLOCK" | "UNBLOCK"}
	response:	{
					"kind": "OK",
			    	"message": "admin permission updated",
				    "user": {
				        "id": 1,
				        "publicId": "36",
				        "telegramUserId": "13",
				        ...
				        "userRole": "ADMIN",
				        "userPermission": "UNBLOCK",
				        "adminPermission": "BLOCK" | "UNBLOCK",
				        "createdAt": "2024-09-07T14:17:48.697Z"
				    }
				}

# /account/add-admin
	permission:	SUPER
	method: POST
	request(payload): {"userId": 1}
	response:	{
					"kind": "OK",
				    "message": "add admin success",
				    "user": {
				        "id": 1,
				        "publicId": "36",
				        "telegramUserId": "13",
				        ...
				        "userRole": "ADMIN",
				        "userPermission": "UNBLOCK",
				        "adminPermission": "UNBLOCK",
				        "createdAt": "2024-09-07T14:17:48.697Z"
				    }
				}

#	/account/remove-admin
	permission:	SUPER
	method:	POST
	request(body):	{"userId": 1}
	response:	{
					"kind": "OK",
				    "message": "remove admin success",
				    "user": {
				        "id": 1,
				        "publicId": "36",
				        "telegramUserId": "13",
				        ...
				        "userRole": "USER",
				        "userPermission": "UNBLOCK",
				        "adminPermission": "BLOCK",
				        "createdAt": "2024-09-07T14:17:48.697Z"
				    }
				}

#	/feedback
	permission:	ADMIN
	method:	POST
	request(body):	{"title": "third title", "content": "third content"}
	response:	{
					"kind": "OK",
				    "feedback": {
				        "id": 6,
				        "userId": 1,
				        "title": "third title",
				        "content": "third content",
				        "createdAt": "2024-09-09T10:23:34.154Z"
				    }
				}

#	/feedback/all
	permission:	ADMIN
	method:	GET
	request:	Null
	response:	{
					"kind": "OK",
				    "feedbacks": [
				        {
				            "id": 1,
				            "userId": 1,
				            "title": "first news",
				            "content": "first content",
				            "createdAt": "2024-09-08T12:10:34.153Z"
				        },
				        {
				            "id": 5,
				            "userId": 1,
				            "title": "third news",
				            "content": "third content",
				            "createdAt": "2024-09-09T00:37:55.758Z"
				        }
				    ]
				}

#	/feedback
	permission:	ADMIN
	method:	GET
	request(query):	{"userId": 1}
	response:	{
					"kind": "OK",
				    "feedbacks": [
				        {
				            "id": 1,
				            "userId": 1,
				            "title": "first news",
				            "content": "first content",
				            "createdAt": "2024-09-08T12:10:34.153Z"
				        },
				        {
				            "id": 5,
				            "userId": 1,
				            "title": "third news",
				            "content": "third content",
				            "createdAt": "2024-09-09T00:37:55.758Z"
				        }
				    ]
				}

#	/feedback
	permission:	ADMIN
	method:	DELETE
	request(query):	{"id": 5}
	response:	{
					"kind": "OK",
				    "feedback": {
				        "id": 5,
				        "userId": 1,
				        "title": "third news",
				        "content": "third content",
				        "createdAt": "2024-09-09T00:37:55.758Z"
				    }
				}


# Create AutoConvert:

Route:  /autoconverts
Method: POST,
Request: {"currencyIdFrom": "ETH", "currencyIdTo": "USDT", "address": "0xbC430A61EbBA28F1d0b538dE204503280671c9C8" },
Response:   {
                "id": "3",
                "address": "0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                "addressQrUrl": "http://localhost:3000/qr?text=0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                "currencyFrom": {
                    "id": "ETH",
                    "type": "CRYPTO",
                    "cryptoCode": "ETH",
                    "cryptoToken": "ETH",
                    "cryptoChain": "ETHEREUM",
                    "cryptoTokenName": "ETH",
                    "cryptoChainName": "Ethereum",
                    "decimals": 18
                },
                "currencyTo": {
                    "id": "USDT",
                    "type": "CRYPTO",
                    "cryptoCode": "USDT",
                    "cryptoToken": "USDT",
                    "cryptoChain": "ETHEREUM",
                    "cryptoTokenName": "USDT",
                    "cryptoChainName": "Ethereum",
                    "decimals": 6
                }
            }


# Get AutoConvert:

Route:  /autoconverts
Method: GET
Request:    Null
Response:   {
                "items": [
                    {
                        "id": "3",
                        "address": "0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                        "addressQrUrl": "http://localhost:3000/qr?text=0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                        "currencyFrom": {
                            "id": "ETH",
                            "type": "CRYPTO",
                            "cryptoCode": "ETH",
                            "cryptoToken": "ETH",
                            "cryptoChain": "ETHEREUM",
                            "cryptoTokenName": "ETH",
                            "cryptoChainName": "Ethereum",
                            "decimals": 18
                        },
                        "currencyTo": {
                            "id": "USDT",
                            "type": "CRYPTO",
                            "cryptoCode": "USDT",
                            "cryptoToken": "USDT",
                            "cryptoChain": "ETHEREUM",
                            "cryptoTokenName": "USDT",
                            "cryptoChainName": "Ethereum",
                            "decimals": 6
                        }
                    }
                ]
            }

# Execute AutoConvert:
Route:  /autoconverts/execute
Request:    { "autoconvertId": 3, "amount": 5 }
Response:   {
                "kind": "OK",
                "autoconvert": {
                    "id": "3",
                    "address": "0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                    "addressQrUrl": "http://localhost:3000/qr?text=0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                    "currencyFrom": "ETH",
                    "currencyTo": "USDT",
                    "amount": 5
                }
            }


# Google Authentication

  ## Create secretKey:

    Route:  /otp/create-secret
    Method: GET,
    Request: Null,
    Response: { "secret": "O367ZPGNGLJRAIB5", "url": ..., "qrUrl": ...}

    Create "X-Otp-Auth-Token": (expires: 24h)

  ## Enable otp
  Route:  /otp/enable
  Method: POST,
  Request: { "secret": "O367ZPGNGLJRAIB5", "passcode": "489787"},
  Response: {"kind": "OK", "session": "eyJhbGciOiJIUzI1NiI......"}

  ## auth otp
  Route:  /otp/auth
  Method: POST,
  Request: { "passcode": "790886" },
  Response: { "kind": "OK", "session": "eyJhbGciOiJIUzI1NiI......" }

  For endpoints that require google authentication, please include the "X-Otp-Auth-Token" header in every request.
  example: "eyJhbGciOiJIUzI1NiI......"

# /payouts
Request:    {
                "depositAddress": "0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                "currencyId": "USDT",
                "comment": "test payout",
                "value": 5000
            }
Response:   {
                "id": "1",
                "depositAddress": "0xbC430A61EbBA28F1d0b427dE204503280671c9C8",
                "amount": 5000,
                "currencyId": "USDT",
                "comment": "test payout",
                "state": "IN_PROGRESS",
                "transactionId": "1"
            }

# Monthly Limit

## Create monthly limit

  Route:  /limits
  Method: POST
  Request:    {
                  "checkVerification": "VERIFIED" | "UNVERIFIED",
                  "limitType": "TRANSFER_MONTH" | "SWAP_MONTH" | "AUTOCONVERT_MONTH",
                  "currencyId": "USDT" | "BTC" | "ETH"...,
                  "amount": 60000
              }
  Response:   {
                  "kind": "OK",
                  "limit": {
                      "id": 1,
                      "checkVerification": "VERIFIED",
                      "limitType": "TRANSFER_MONTH",
                      "amount": 60000,
                      "currencyId": "USDT",
                      "createdAt": "2024-09-14T16:37:54.145Z"
                  }
              }

## Get monthly limit

Route:  /limits
Method: GET
Request:    Null
Response:   {
                "kind": "OK",
                "limits": [
                    {
                        "id": 1,
                        "checkVerification": "VERIFIED",
                        "limitType": "TRANSFER_MONTH",
                        "amount": 60000,
                        "currencyId": "USDT",
                        "createdAt": "2024-09-14T16:37:54.145Z"
                    }
                ]
            }

## Update monthly limit

Route:  /limits/update
Method: POST
Request:    {
                "id": 1,
                "checkVerification": "VERIFIED",
                "limitType": "TRANSFER_MONTH",
                "currencyId": "USDT",
                "amount": 40000
            }
Response:   {
                "kind": "OK",
                "limit": {
                    "id": 1,
                    "checkVerification": "VERIFIED",
                    "limitType": "TRANSFER_MONTH",
                    "amount": 40000,
                    "currencyId": "USDT",
                    "createdAt": "2024-09-14T16:37:54.145Z"
                }
            }


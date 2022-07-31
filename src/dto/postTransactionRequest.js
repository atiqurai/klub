const { json } = require("body-parser")

const postTransactionRequest = {
  id: '',
  amount: {
    value: '',
    unit: '',
    currency: '',
  },
  type: '',
  status: '',
  meta_info: {
    card_id: '',
    merchant: {
      id: '',
      category_code: '',
      country_code: '',
      name: ''
    }
  }
}


exports.Module = postTransactionRequest;

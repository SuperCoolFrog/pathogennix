import HashMap from '../models/HashMap';

function validateTruthyValue<K,V>(form: HashMap<K,V>) {
   const validationErrors = [] as K[];
  
  form.forEach(([key, value]) => {
    if (!value) {
      validationErrors.push(key);
    }
  });
  
  return validationErrors;
};

export default validateTruthyValue;
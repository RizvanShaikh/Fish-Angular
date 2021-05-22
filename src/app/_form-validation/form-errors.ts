export const VALIDATION_MESSAGES = {
  first_name: {
    required: `Please enter first name`,
  },
  last_name: {
    required: `Please enter last name`,
  },
  email: {
    required: `Please enter email`,
    email: `Please enter valid email`,
    validateEmail: `Please enter valid email`,
  },
  phone_number: {
    required: `Please enter phone number`,
    minlength: `Please enter at least 8 digits`,
    maxlength: `Please enter at least 18 digits`,
    whiteSpace: 'space not allowed',
    validatePhoneNumber: `Please enter valid phone number`,
    pattern : `Please enter valid phone number`,

  },
  password: {
    required: `Please enter password`,
    pattern: `Password must contains at least 6 characters`,
  },

  old_password: {
    required: `Please enter password`,
  },

  new_password: {
    required: `Please enter password`,
    pattern: `Password must contains at least 6 characters`,
  },
  confirm_password: {
    required: `Please enter confirm password`,
    validatePassword: `Confirm password is not matched`,
  },

  size_title: {
    required: `Please enter size`,
  },

  category_title: {
    required: `Please enter category`,
  },

  importing_title: {
    required: `Please enter importing`,
  },

  type_title: {
    required: `Please enter type`,
  },
  
  subcategory_title: {
    required: `Please enter subcategory`,
  },

  category_id: {
    required: `Please select category`,
  },

  subcategory_id: {
    required: `Please select subcategory`,
  },

  importing_id: {
    required: `Please select importing`,
  },
  
  type_id: {
    required: `Please select type`,
  },

  product_title: {
    required: `Please enter product`,
  },

  glace: {
    required: `Please enter glace`,
  },
  
  sizes: {
    required: `Please select size`,
  },

  price: {
    required: `Please enter price`,
  },


  address: {
    required: `Please enter address`,
  },

  date_of_birth: {
    required: `Please select date of birth`,
  },
  
 
  task: {
    required: `Please enter task`,
  },

  issue_date: {
    required: `Please select issue date`,
  },

  assignee_id: {
    required: `Please select assignee`,
  },
  
  due_date: {
    required: `Please select due date`,
  },
  
  name: {
    required: `Please enter name`,
  },

  role_id: {
    required: `Please select role`,
  },
  
  
  contact_no: {
    required: `Please enter contact no`,
  },
  
  timing: {
    required: `Please enter timing`,
  },
  
  facebook_link: {
    required: `Please enter facebook link`,
  },
   
  twitter_link: {
    required: `Please enter twitter link`,
  },

  youtube_link: {
    required: `Please enter youtube link`,
  },

  linked_in_link: {
    required: `Please enter linkedin link`,
  },

}

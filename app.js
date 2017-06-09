(function(){
  'use strict';

  var formData = [
    {
      "type": "text",
      "label": "First Name",
      "id": "user-first-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "text",
      "label": "Last Name",
      "id": "user-last-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "email",
      "label": "Email Address",
      "id": "user-email",
      "icon": "fa-envelope",
      "options": []
    },
    {
      "type": "text",
      "label": "Current website url",
      "id": "user-website",
      "icon": "fa-globe",
      "options": []
    },
    {
      "type": "select",
      "label": "Select Language",
      "id": "user-language",
      "icon": "",
      "options": [
        {
          "label": "English",
          "value": "EN"
        },
        {
          "label": "French",
          "value": "FR"
        },
        {
          "label": "Spanish",
          "value": "SP"
        },
        {
          "label": "Chinese",
          "value": "CH"
        },
        {
          "label": "Japanese",
          "value": "JP"
        }
      ]
    },
    {
      "type": "textarea",
      "label": "Your Comment",
      "id": "user-comment",
      "icon": "fa-comments",
      "options": []
    },
    {
      "type": "tel",
      "label": "Mobile Number",
      "id": "user-mobile",
      "icon": "fa-mobile-phone",
      "options": []
    },
    {
      "type": "tel",
      "label": "Home Number",
      "id": "user-phone",
      "icon": "fa-phone",
      "options": []
    }
  ];

  var formNode = document.getElementById('signup');
  var banner = document.createElement('div');
  var footer = document.createElement('div');
  var title = document.createElement('h1');
  var footerButton = document.createElement('button');
  title.textContent = 'Sign Up For My Web App';
  banner.id = 'banner';
  footer.id = 'footer';
  formNode.appendChild(banner);
  banner.appendChild(title);

  for(var i = 0; i < formData.length; i++) {
    var input = formData[i];
    var formType;
    if (formData[i].type === 'select') {
      formType = document.createElement('select');
      formNode.appendChild(formType);

      for (var x = 0; x < input.options.length; x++) {
        var selectOption = document.createElement('option');
        selectOption.textContent = input.options[x].label;
        selectOption.value = input.options[x].value;
        formType.appendChild(selectOption);
      }
    } else if (formData[i].type === 'textarea') {
      formType = document.createElement('textarea');
      formType.placeholder = input.label;
      formNode.appendChild(formType);
      var temp = document.createElement('i');
    } else {
      formType = document.createElement('input');
      formType.type = input.type;
      formType.placeholder = input.label;
      formType.id = input.id;
      formType.class = input.icon;
      formNode.appendChild(formType);
    }

  }
  formNode.appendChild(footer);
  footer.appendChild(footerButton);
  footerButton.textContent = 'Submit Form';


}());

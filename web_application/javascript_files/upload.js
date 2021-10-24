const getValuesFromInputs = () =>{
   //const profileName = document.querySelector('input.profile-name').value;
   const profileImg = document.querySelector('input.profile-img').files[0];
   //const profileAud = document.querySelector('input.profile-aud').files[0];

   document.querySelector('form').style.display = 'none';

   return [ profileImg];

}
const convertInputValues = () => {
  const [ profileImg] = getValuesFromInputs();

  const profileImgURL = URL.createObjectURL(profileImg);
  //const profileAudURL = URL.createObjectURL(profileAud);

  return[ profileImgURL ]
}
const addInputToProfile = () => {

    const [ profileImgURL]  = convertInputValues();

    //document.querySelector('.profile h2').innerHTML = `${profileName}`;
    document.querySelector('.profile img').setAttribute('src', profileImgURL);
    //document.querySelector('.aud').setAttribute('src', profileAudURL);

}
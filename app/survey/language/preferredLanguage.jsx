// import { english, french, german, spanish } from '@/app/images/images';
// import React, { useState } from 'react';
// import '../language/language.css';


// const PreferredLanguage = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     preferred_language:''});

//   const handleLanguageSelect = (value) => {
//     setSelectedLanguage({
//       ...selectedLanguage,
//       [name]: value,
//   });

//   };

//   return (
//     <section>
//       <h2 className='center'>¿Cuál es tu idioma preferido?</h2>

//       <div className='container'>
//         <div className="rotate-scale-up">
//           <button name='english' 
//           value={selectedLanguage.preferred_language} 
//           type="button" onClick={() => handleLanguageSelect('english')}>
//             <img src={english} alt="English Image" />
//             <div>
//               <h5>Inglés</h5>
//             </div>
//           </button>

//         </div>

//         <div className="rotate-scale-up">
//           <button type="button" 
//           name='spanish' 
//           value={selectedLanguage.preferred_language} 
//           onClick={() => handleLanguageSelect('spanish')}>
//             <img src={spanish} alt="Spanish Image" />
//             <div>
//               <h5>Español</h5>
//             </div>
//           </button>

//         </div>

//         <div className="rotate-scale-up">
//           <button type="button"  
//           name='french' value={selectedLanguage.preferred_language} 
//           onClick={() => handleLanguageSelect('french')}>
//             <img src={french} alt="French Image" />
//             <div>
//               <h5>Francés</h5>
//             </div>
//           </button>

//         </div>

//         <div className="rotate-scale-up">
//           <button type="button" 
//           name='german' value={selectedLanguage.preferred_language} 
//           onClick={() => handleLanguageSelect('german')}>
//             <img src={german} alt="German Image" />
//             <div>
//               <h5>Alemán</h5>
//             </div>
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default PreferredLanguage;

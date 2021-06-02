import React from "react";

export const Checkbox = React.forwardRef(({ handleLanguage, languagesList,register,ref,selectedLanguages} ) => {

  return  languagesList.map((language) => {
    return (
  <div>
      <div style={{marginTop:'10px',marginLeft:'10px'}} key={language}>
        <input
          type="checkbox"
          name="language"
          className="checkbox"
          value={language}
          onChange={handleLanguage}
          ref={register({
            required: true,
          })}
          checked = {selectedLanguages.includes(language)}
        />
        <label>
          <h6>{language}</h6>
        </label>
      </div> 
      </div>
    );
  });

 
  
});

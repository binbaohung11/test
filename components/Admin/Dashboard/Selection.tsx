'use client'
import React, { useState } from 'react';
import MyEditor from './Blog/MyEditer';
import MyImage from './Photo/MyImage';
import MyVideo from './Video/MyVideo';
import MyRecruitment from './Recruitment/MyRecruitment';


const SelectOption: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('editor');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="editor">Bài Blog</option>
        <option value="image">Hình ảnh</option>
        <option value="video">Video</option>
        <option value="td">Tuyển Dụng</option>
      </select>

      <div className="mt-4">
        {selectedOption === 'editor' && <MyEditor />}
        {selectedOption === 'image' && <MyImage />}
        {selectedOption === 'video' && <MyVideo />}
        {selectedOption === 'td' && <MyRecruitment />}
      </div>
    </div>
  );
};

export default SelectOption;

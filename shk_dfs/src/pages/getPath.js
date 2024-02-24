import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { Context } from '..';
import { fetchPath, fetchSpk, fetchSection, fetchManagers } from '../http/PathAPI';
import { observer } from 'mobx-react-lite';


const getPath = observer(() => {

  const {paths} = useContext(Context)
  const [selectedLabelSection, setSelectedLabelSection] = useState("Выберите раздел");
  const [selectedLabelSpk, setSelectedLabelSpk] = useState("Выберите подраздел");
  const home = "\\Gk.rosatrom.local\\shk_dfs"
  useEffect(() => {
    fetchPath().then(data => paths.setPath(data))
    fetchSection().then(data => paths.setSection(data))
    
  }, [])

  // const createPaths = () => {
  //   const formData = new FormData()
  //   formData.append('section', paths.selectedSection.name)
  //   formData.append('spk', paths.selectedSpk.name)
  //   formData.append('spk_id', paths.selectedSpk.id)
  //   const sec = formData.get('section')
  //   const spk = formData.get('spk')
  //   const spk_id = formData.get('spk_id')
  //   const dataOfPath = [{path: sec+"\\"+spk, spkId: spk_id}]
  //   createPath(dataOfPath)
  // }

  return (
    <div className= 'flex justify-center mt-10'>
      <div className='flex flex-col items-center'>
        <div className='mb-4'>
        <Dropdown label={selectedLabelSection} dismissOnClick={false}>
          {paths.section.map(data => (
            <Dropdown.Item onClick={() => {
              paths.setSelectedSection(data);
              setSelectedLabelSection(data.name);
              fetchSpk(paths.selectedSection.id).then(data => paths.setSpk(data));
            }} key={data.id}>
              {data.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
    </div>
    <div className='mb-4'>
      <Dropdown label={selectedLabelSpk} dismissOnClick={false}>
      {paths.spk.map(data => (
        <Dropdown.Item onClick={() => {
          paths.setSelectedSpk(data);
          setSelectedLabelSpk(data.name);
          fetchManagers(paths.selectedSpk.id).then(data => paths.setManagers(data))
        }} key={data.id}>
          {data.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
    </div>
    {console.log(paths.selectedManagers.first_manager)}
    <p className='mb-4'>Путь: {paths.selectedSection.name && paths.selectedSpk.name ? `${home}\\${paths.selectedSection.name}\\${paths.selectedSpk.name}` : `${home}`} </p>
    {paths.managers.map(data => (<p className='mb-4'>Главная бухгалтерия: {data.manager.first_manager}</p>))}
    {paths.managers.map(data => (<p className='mb-4'>Резервная бухгалтерия: {data.manager.second_manager}</p>))}
    </div>
    </div>
  );
});

export default getPath;
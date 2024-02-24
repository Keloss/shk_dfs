import { Dropdown } from "flowbite-react";
import React, {useEffect, useState, useContext} from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { fetchAllManagers, fetchAllSpk } from '../http/PathAPI';
import { Table } from 'flowbite-react';
import { fetchAll } from '../http/ListAPI'


const getList = observer(() => {

    const {paths} = useContext(Context)

    const [selectedLabelSpk, setSelectedLabelSpk] = useState("Выберите подраздел");

    useEffect(() => {
        fetchAllSpk().then(data => paths.setSpk(data))
    }, [])


    return (
    <div className= 'flex justify-center mt-10'>
        <div className='flex flex-col items-center'>
            <div className='mb-4'>
                <Dropdown label={selectedLabelSpk} dismissOnClick={false}>
                    {paths.spk.map(data => (
                        <Dropdown.Item onClick={()=> {
                            paths.setSelectedSpk(data)
                            setSelectedLabelSpk(data.name)
                            fetchAll(paths.selectedSpk.id).then(data => paths.setPath(data))
                        }} key={data.id}>
                            {data.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
            </div>
            {   
                paths.path ?
                paths.path.map(data => ( 
                    <p>Список ресурсов, подразделений по приказу: {<br/>} Дата: {data.manager.order_date} {<br/>} Номер: {data.manager.order_num}</p> 
                )) 
                :
                <p></p>
            }
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Путь до ресурса</Table.HeadCell>
                        <Table.HeadCell>ФИО Главной бухгатлерии</Table.HeadCell>
                        <Table.HeadCell>ФИО Резервной бухгалтерии</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { 
                            paths.path ?
                            paths.path.map(data => ( 
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{data.path}</Table.Cell>
                                    <Table.Cell>{data.manager.first_manager}</Table.Cell>
                                    <Table.Cell>{data.manager.second_manager}</Table.Cell>
                                </Table.Row>  
                            )) 
                            :
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    </div>
    );
});

export default getList;
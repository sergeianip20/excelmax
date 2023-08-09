import React from 'react';

const TableBodys = (props:any) => {
    return (
        <>
            <tbody>
            <tr>
                <th className={'first'} rowSpan={3}>№ n/n</th>
                <th rowSpan={3}>Участок трубопровода, километраж (привязка)</th>
                <th rowSpan={3}>№ сварного соединения</th>
                <th rowSpan={3}>Диаметр, толщина стенки</th>
                <th rowSpan={3}>Тип шва</th>
                <th rowSpan={3}>Дата сварки</th>
                <th rowSpan={3}>Клеймо сварщика</th>
                <th rowSpan={3}>Тип сварного соединения</th>
                <th rowSpan={3}>Способ сварки</th>
                <th colSpan={3}>Вид контроля</th>
                <th rowSpan={3}>Длина сварного соединения</th>
                <th rowSpan={3}>Наименование соединяемых элементов, марка стали</th>
                <th rowSpan={3}>марка стали</th>
            </tr>
            <tr>
                <th rowSpan={2}>ВИК</th>
                <th rowSpan={2}>РК</th>
                <th rowSpan={2}>УЗК</th>
            </tr>
            </tbody>
        </>
    );
};

export default TableBodys;
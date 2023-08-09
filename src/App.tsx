import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import "./App.css";
import { useDownloadExcel } from "react-export-table-to-excel";
import BasicTextFields from "./component/formexcel";
import { Button } from "@mui/material";

export type Inputs = {
  id: string;
  weldingMethod: string;
  gost: string;
  seamType: string;
  tipsWeldedConnection: string;
  pipelineSection: string;
  WeldNo: string;
  wallThickness: string;
  DateOfWelding: string;
  WelderMark: string;
  VUK: string;
  RK: string;
  YZK: string;
  WeldLength: string;
  connectedElements: string;
  GradeSteel: string;
};
function App() {
  const tableRef = useRef(null);
  const [arrayvalue, setArrayValue] = useState([
    {
      id: "1",
      weldingMethod: "РД",
      gost: "12",
      seamType: "helo",
      tipsWeldedConnection: "Тавровое",
      pipelineSection: "ВСТО",
      WeldNo: "Ст.1/1.1",
      wallThickness: "530х10",
      DateOfWelding: "",
      WelderMark: "",
      VUK: "1",
      RK: "",
      YZK: "",
      WeldLength: "",
      connectedElements: "200",
      GradeSteel: "",
    },
  ]);
  const newArrayValue = (e: any) => {
    setArrayValue([
      ...arrayvalue,
      {
        id: String(arrayvalue.length),
        weldingMethod: "РД",
        gost: "12",
        seamType: e.seamType,
        tipsWeldedConnection: e.tipsWeldedConnection,
        pipelineSection: "ВСТО",
        WeldNo: e.WeldNo,
        wallThickness: e.wallThickness,
        DateOfWelding: "",
        WelderMark: "",
        VUK: "1",
        RK: "",
        YZK: "",
        WeldLength: e.WeldLength,
        connectedElements: e.connectedElements,
        GradeSteel: e.GradeSteel,
      },
    ]);
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });
  return (
    <div>
      <BasicTextFields newArrayValue={newArrayValue} />

      <Button onClick={onDownload}> Export excel</Button>
      <div>
        <table ref={tableRef} className={"headerTable_item"}>
          <thead>
            <tr>
              <th className={"first"} rowSpan={3}>
                № n/n
              </th>
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
              <th rowSpan={3}>
                Наименование соединяемых элементов, марка стали
              </th>
              <th rowSpan={3}>марка стали</th>
            </tr>
            <tr>
              <th rowSpan={2}>ВИК</th>
              <th rowSpan={2}>РК</th>
              <th rowSpan={2}>УЗК</th>
            </tr>
          </thead>

          <tbody>
            <tr></tr>

            {arrayvalue.map((e: any) => {
              return (
                <tr>
                  <th>{e.id}</th>
                  <th>{e.pipelineSection}</th>
                  <th> {e.WeldNo}</th>
                  <th>{e.wallThickness}</th>
                  <th>{e.seamType}</th>
                  <th>{e.DateOfWelding}</th>
                  <th>{e.WelderMark}</th>
                  <th>{e.tipsWeldedConnection}</th>
                  <th>{e.weldingMethod}</th>
                  <th>{e.VUK}</th>
                  <th>{e.RK}</th>
                  <th>{e.YZK}</th>
                  <th>{e.WeldLength}</th>
                  <th>{e.connectedElements}</th>
                  <th>{e.GradeSteel}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

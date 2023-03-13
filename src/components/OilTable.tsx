import { FC } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export interface IDataToDay {
  id: number;
  date: string;
  extractOil: number;
  extractLiquids: number;
}

export interface Idata {
  data: IDataToDay[];
}

export const OilTable: FC<Idata> = ({ data }) => {
  return (
    <DataTable value={data} stripedRows tableStyle={{ minWidth: '50rem' }}>
      <Column field="date" dataType="date" sortable header="Дата"></Column>
      <Column field="extractOil" sortable header="Добыча нефти, т/сутки"></Column>
      <Column field="extractLiquids" sortable header="Добыча жидкости, куб м/сутки"></Column>
    </DataTable>
  );
};

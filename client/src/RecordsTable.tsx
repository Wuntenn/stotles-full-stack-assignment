import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import { ProcurementRecord } from "./Api";
import ProcurementRecordPreviewModal from "./ProcurementRecordPreview";

type Props = {
  records: ProcurementRecord[];
};

function RecordsTable(props: Props) {
  const { records } = props;
  const [previewedRecord, setPreviewedRecord] = React.useState<
    ProcurementRecord | undefined
  >();

  const pData = records.map((record) => { 
    const cell =  { ...record, key: record.id } ;
    return cell;
  }) 

  const columns = React.useMemo<ColumnType<ProcurementRecord>[]>(() => {
    return [
      {
        title: "Published",
        render: (record: ProcurementRecord) =>
          new Date(record.publishDate).toLocaleDateString(),
      },
      {
        title: "Title",
        render: (record: ProcurementRecord) => {
          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            setPreviewedRecord(record);
          };
          return (
            <a href="#" onClick={handleClick}>
              {record.title}
            </a>
          );
        },
      },
      {
        title: "Buyer name",
        render: (record: ProcurementRecord) => record.buyer.name,
      },
      {
        title: "Value",
        render: (record: ProcurementRecord) => record.value && `${record.value} ${record.currency}`,
      },
      {
        title: "Stage",

        render: (record: ProcurementRecord) => {
          const isTender = record.stage === "TENDER";
          const closeDateIsTruthyAndWithinTime = record.closeDate && new Date(record.closeDate).toISOString() > new Date(Date.now()).toISOString();
          const closeDate = new Date(record.closeDate).toLocaleDateString()
          const awardDate = new Date(record.closeDate).toLocaleDateString()
          let status = isTender ? (closeDateIsTruthyAndWithinTime ? `Open until ${closeDate}` : 'Closed') : `Awarded on ${awardDate}`;
          return status;
        }
      }
    ];
  }, []);
  return (

    <>
      <Table columns={columns} dataSource={pData} pagination={false} />
      <ProcurementRecordPreviewModal
        record={previewedRecord}
        onClose={() => setPreviewedRecord(undefined)}
      />
    </>
  );
}

export default RecordsTable;

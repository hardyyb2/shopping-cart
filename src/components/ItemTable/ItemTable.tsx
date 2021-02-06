import { DataProps } from "../../utils";

import {
  TableContainer,
  TableWrapper,
  Title,
  TitleContainer,
  TableHeadersContainer,
  TableHeader,
  RowsContainer,
  Row,
} from "./ItemTable.styles";

interface IProps {
  title: string;
  items: DataProps[];
  headers: string[];
}

const ItemTable: React.FC<IProps> = ({ title, headers, items }) => {
  return (
    <TableWrapper>
      <TableContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <TableHeadersContainer>
          {headers &&
            headers.map((header: string, index: number) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
        </TableHeadersContainer>
        <RowsContainer>
          {items &&
            items.map((item: DataProps, index: number) => (
              <Row key={index}>{item.name}</Row>
            ))}
        </RowsContainer>
      </TableContainer>
    </TableWrapper>
  );
};

export default ItemTable;

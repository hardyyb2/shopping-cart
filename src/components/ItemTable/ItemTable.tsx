import { ItemGroup } from "..";
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
  items: DataProps[] | null;
  headers: string[] | null;
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
              <Row key={index}>
                <ItemGroup
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  imgSrc={item.img_url}
                  quantity={item.quantity}
                />
              </Row>
            ))}
        </RowsContainer>
      </TableContainer>
    </TableWrapper>
  );
};

export default ItemTable;

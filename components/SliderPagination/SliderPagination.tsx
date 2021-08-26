import { FC } from 'react';
import { PaginationWrap, PaginationDot } from './SliderPagination.style';

interface SliderPaginationProps {
  className?: string;
  pages?: number[];
  activePage?: number;
  onClick?: (indicatorId: string | number) => void;
}

const SliderPagination: FC<SliderPaginationProps> = ({ pages, activePage, onClick, className, ...other }) => {
  return (
    <PaginationWrap {...other}>
      {pages.map((indicatorId) => {
        const isActivePage = activePage === indicatorId;
        return <PaginationDot key={indicatorId} onClick={() => onClick(indicatorId)} active={isActivePage} />;
      })}
    </PaginationWrap>
  );
};

export default SliderPagination;

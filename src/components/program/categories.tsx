import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import {
  FaFutbol,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaUniversity,
} from 'react-icons/fa';
import { Theme } from '../../utils/theme';

const CategoriesGrid: StyledComponent<any, any, Theme> = styled('section')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
  grid-auto-rows: 140px;
  grid-gap: 24px;
  margin-bottom: 24px;
`;

const CategoryGridItem: StyledComponent<any, any, Theme> = styled('div')`
  background-color: ${props => props.theme.colors.accent};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryGridItemTitle: StyledComponent<any, any, Theme> = styled('h3')`
  text-align: center;
`;

const Categories: React.StatelessComponent = () => {
  const categories = [
    { title: 'Edukacja', Icon: FaGraduationCap },
    { title: 'Sport', Icon: FaFutbol },
    { title: 'Kultura', Icon: FaUniversity },
    { title: 'Pomoc Społeczna', Icon: FaHandHoldingHeart },
  ];
  return (
    <CategoriesGrid>
      {categories.map(({ title, Icon }) => (
        <CategoryGridItem key={title}>
          <CategoryGridItemTitle>{title}</CategoryGridItemTitle>
          <Icon size="32" />
        </CategoryGridItem>
      ))}
    </CategoriesGrid>
  );
};

export default Categories;

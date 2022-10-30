import React from 'react';
import { categoryList, ratingList, locationList} from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import SelectList from '../../common/SelectList';
import './styles.css';

const FilterPanel = ({
  selectCategory,
  selectedCategory,
  selectLocation,
  selectedLocation,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Category</p>
      <SelectList
        options={categoryList}
        value={selectedCategory}
        handleSelect={selectCategory}
        inputLabel = 'Property Type'
      />
    </div>
    <div className='input-group'>
      <p className='label'>Location</p>
      <SelectList
        options={locationList}
        value={selectedLocation}
        handleSelect={selectLocation}
        inputLabel = 'Location'
      />
    </div>
    
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    
  </div>
);

export default FilterPanel;

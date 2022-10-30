import React from 'react';
import { categoryList, locationList} from '../../../constants';
import SliderProton from '../../common/SliderProton';
import SelectList from '../../common/SelectList';
import DatePicker from '../../common/DatePicker';
import './styles.css';

const FilterPanel = ({
  selectCategory,
  selectedCategory,
  selectLocation,
  selectedLocation,
  selectedPrice,
  changePrice,
  selectDate,
  selectedDate,
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
      <p className='label'>Move-In Date</p>
      <DatePicker
        value={selectedDate}
        handleSelect={selectDate}
      />
    </div>
    
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    
  </div>
);

export default FilterPanel;

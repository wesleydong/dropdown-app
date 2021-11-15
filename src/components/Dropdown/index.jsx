import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../redux';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';
import ChevronUp from '../../assets/svg/Feather/ChevronUp';
import ChevronDown from '../../assets/svg/Feather/ChevronDown';
import { DropdownItem } from '../DropdownItem';

export const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { options } = props;
  const selectedOptions = useSelector((state) => state.selectedOptions);
  const dispatch = useDispatch();

  const toggleList = () => {
    return setIsOpen(!isOpen);
  };

  const toggleAllCheckboxes = (optionsList) => {
    if (selectedOptions.length > 0 && optionsList.length > 0) {
      dispatch({
        type: ACTIONS.CLEAR_SELECTED_OPTIONS
      });
    } else {
      dispatch({
        type: ACTIONS.SELECT_ALL_OPTIONS,
        payload: {
          optionsList: optionsList
        }
      });
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdown}
        onClick={toggleList}
      >
        <div className={styles.title}>
          { selectedOptions && selectedOptions.length > 0
            ? selectedOptions.join(', ')
            : 'Select one or multiple options'}
        </div>
        {
          isOpen
            ? <ChevronUp />
            : <ChevronDown />
        }
      </div>
      {
        isOpen && (
          <>
            <ul className={styles.listContainer}>
              {
                options.map((item, i) => {
                  return (
                    <DropdownItem
                      id={i}
                      option={item}
                      key={i}
                    />
                  );
                })
              }
            </ul>
            <button
              type='button'
              onClick={() => toggleAllCheckboxes(options)}
            >
              Toggle All
            </button>
          </>
        )
      }
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array
};
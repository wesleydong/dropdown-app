import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../redux';
import PropTypes from 'prop-types';
import styles from './DropdownItem.module.scss';

export const DropdownItem = (props) => {
  // const [checked, setChecked] = useState(false);
  const selectedOptions = useSelector((state) => state.selectedOptions);
  const dispatch = useDispatch();

  // const toggleCheckbox = () => {
  //   setChecked(!checked);
  // };

  const updateSelectedOptions = (e) => {
    e.stopPropagation;
    // toggleCheckbox(e);

    if (selectedOptions.indexOf(props.option) > -1) {
      dispatch({
        type: ACTIONS.REMOVE_FROM_SELECTED_OPTIONS,
        payload: {
          option: props.option
        }
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_TO_SELECTED_OPTIONS,
        payload: {
          option: props.option
        }
      });
    }
  };

  return (
    <li
      className={styles.item}
      onClick={(e) => updateSelectedOptions(e)}
    >
      <div className={styles.checkbox}>
        <input 
          type='checkbox'
          // checked={checked}
          checked={selectedOptions.indexOf(props.option) > -1}
          // onChange={toggleCheckbox}
        />
      </div>
      <div className={styles.option}>
        { props.option }
      </div>
    </li>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.number,
  option: PropTypes.string
};
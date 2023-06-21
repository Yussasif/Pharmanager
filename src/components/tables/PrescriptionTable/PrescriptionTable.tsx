import { tableHeading, filterOptions, listOfPrescriptions, filterParameters } from "./prescriptionData";
import { useState, useEffect, Key } from "react";
import styles from './tables.module.scss';
import Header from "../../Header/Header";
import { InlineIcon } from '@iconify/react';
import filterPrescriptions from "./utils/filterPrescriptions";
import { PrescriptionItem } from "./utils/model";
import { backGroundColorGenerator } from "./utils/backGroundColorGeneratore";
import PopUpMenu from "./PopUpMenu";

// listOfPrescription is an array of objects containing all prescriptions in form of objects using the
// PrescriptionItem interface imported above from `./model`

// Kindly note that the data displayed in the table including filter options and table heading is stored in `./prescriptionData.js` file
// When creating your own table, specify the interface of your table data in the `./model.ts` file
// The data to be displayed in the table is structured as an array of Objects. Each object represent a prescription to and it's details


const Table: React.FC = () => {
    const [selectedFilterOption, setSelectedFilterOption] = useState<string>(filterOptions[0]);  // selectedFilterOption holds the state of the current filterOption selected for display. The default is the
    // first item of the filterOptions array
    const [activeOption, setActiveOption] = useState(filterOptions[0]); // State to hold the default state fo the filter option(The first option in the array of filter option `filterOptions` by default)

    useEffect(() => {
        if (filterOptions.length > 0 && !selectedFilterOption) { // If selectedFilterOption is not provided, set the first option as active
          setActiveOption(filterOptions[0]);
        } else {
          setActiveOption(selectedFilterOption);
        }
    }, [selectedFilterOption]);

    // Assign the return value of `filterPrescriptions` function to `filteredPrescriptions` variable
    const filteredPrescriptions: PrescriptionItem[] = filterPrescriptions(listOfPrescriptions, selectedFilterOption)

    // Get the table data for filtered prescriptions
    const filteredData = filteredPrescriptions.map((prescription) => Object.values(prescription));

    // Function to update the state of the filtered list of prescriptions
    const handleFilterOptionChange = (option: string) => {
        setSelectedFilterOption(option);
    }

    // Function to update the table data being displayed based on the active or selected filter option
    const handleFilterChange = (option: string) => {
        handleFilterOptionChange(option);
        setActiveOption(option);
    }

    // Check if prescriptionList is undefined or empty
    if (!listOfPrescriptions || listOfPrescriptions.length === 0) {
        return <div>No prescriptions available.</div>;
    }

    return (
        <div>
            {/* When this table component finally added to its parent component, remove the Header component from this component and place it in the parent compnay. This will help to reduce the number of props passed to the table component */}
            <div className={styles.filter_bar}>
                <div className={styles.filter_container}>
                    {filterOptions.map((option, index) => (
                        <div
                        key={index}
                        className={activeOption === option ? styles.active : ""}
                        onClick={() => handleFilterChange(option)}
                    >
                        {option}
                    </div>
                    ))}
                </div>
                <div className={styles.filterButton}>
                    <InlineIcon icon="octicon:filter-24" />
                    <span>Filter</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {tableHeading.map((heading, index) => {
                            return <th key={index}>{index === 0 ? <div style={{display: 'flex', alignItems: 'center'}}><InlineIcon icon="tabler:square" style={{color:'#009FE3', marginRight: '10px'}} /><span>{heading}</span></div> : heading}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((innerList, index ) => (
                            <tr key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                {innerList.map((data: {} | null | undefined, id: Key | null | undefined) => (
                                    <td key={id} style={id === 0 ? {color: '#009FE3'} : {}} >{filterParameters && <div className=   {backGroundColorGenerator(data)}>{id === 0 ? <div><InlineIcon icon="tabler:square" style=  {{color: '#009FE3', marginRight: '10px'}} /><span>{data}</span></div> : <span>{data}</span>}</div>}</td>
                                    ))}
                                    <PopUpMenu parameters = { filterParameters } name = {`${innerList[-1]}`} />
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Table;
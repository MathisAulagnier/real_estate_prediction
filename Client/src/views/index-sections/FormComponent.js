import { Street } from "constants/constant";
import { MSZoning } from "constants/constant";
import { LotShape } from "constants/constant";
import { LotConfig } from "constants/constant";
import { Neighborhood } from "constants/constant";
import { Condition2 } from "constants/constant";
import { HouseStyle } from "constants/constant";
import { OverallCond } from "constants/constant";
import { RoofMatl } from "constants/constant";
import { Exterior2nd } from "constants/constant";
import { ExterQual } from "constants/constant";
import { Foundation } from "constants/constant";
import { BsmtCond } from "constants/constant";
import { BsmtFinType1 } from "constants/constant";
import { Heating } from "constants/constant";
import { CentralAir } from "constants/constant";
import { KitchenQual } from "constants/constant";
import { Fireplaces } from "constants/constant";
import { GarageFinish } from "constants/constant";
import { GarageCond } from "constants/constant";
import { PoolQC } from "constants/constant";
import { MiscFeature } from "constants/constant";
import { SaleCondition } from "constants/constant";
import { SaleType } from "constants/constant";
import { Fence } from "constants/constant";
import { PavedDrive } from "constants/constant";
import { GarageQual } from "constants/constant";
import { GarageType } from "constants/constant";
import { Functional } from "constants/constant";
import { Electrical } from "constants/constant";
import { HeatingQC } from "constants/constant";
import { BsmtFinType2 } from "constants/constant";
import { BsmtExposure } from "constants/constant";
import { BsmtQual } from "constants/constant";
import { ExterCond } from "constants/constant";
import { MasVnrType } from "constants/constant";
import { Exterior1st } from "constants/constant";
import { RoofStyle } from "constants/constant";
import { OverallQual } from "constants/constant";
import { BldgType } from "constants/constant";
import { Condition1 } from "constants/constant";
import { LandSlope } from "constants/constant";
import { Utilities } from "constants/constant";
import { LandContour } from "constants/constant";
import { MSSubClass } from "constants/constant";
import React from "react";
// reactstrap components
import {
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    Container,
    Card,
    CardBody,
    UncontrolledTooltip,
    Alert,
    Modal,
    ModalBody
} from "reactstrap";
// core components
import Datetime from 'react-datetime';
import { FireplaceQu } from "constants/constant";

import ClipLoader from "react-spinners/ClipLoader";
import Price from "constants/Price";


function FormComponent() {

    const [alert, setAlert] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [alertModal, setAlertModal] = React.useState(false);
    const [predictPrice, setPredictPrice] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const [data, setSelectedData] = React.useState({
        MSSubClass: "",
        MSZoning: "",
        LotFrontage: "",
        LotArea: "",
        Street: "",
        LotShape: "",
        LandContour: "",
        Utilities: "",
        LotConfig: "",
        LandSlope: "",
        Neighborhood: "",
        Condition1: "",
        Condition2: "",
        BldgType: "",
        HouseStyle: "",
        OverallQual: "",
        OverallCond: "",
        YearBuilt: "",
        YearRemodAdd: "",
        RoofStyle: "",
        RoofMatl: "",
        Exterior1st: "",
        Exterior2nd: "",
        MasVnrType: "",
        MasVnrArea: "",
        ExterQual: "",
        ExterCond: "",
        Foundation: "",
        BsmtQual: "",
        BsmtCond: "",
        BsmtExposure: "",
        BsmtFinType1: "",
        BsmtFinSF1: "",
        BsmtFinSF2: "",
        BsmtUnfSF: "",
        TotalBsmtSF: "",
        Heating: "",
        HeatingQC: "",
        CentralAir: "",
        Electrical: "",
        FstFlrSF: "",
        SndFlrSF: "",
        LowQualFinSF: "",
        GrLivArea: "",
        BsmtFullBath: "",
        BsmtHalfBath: "",
        FullBath: "",
        HalfBath: "",
        BedroomAbvGr: "",
        KitchenAbvGr: "",
        KitchenQual: "",
        TotRmsAbvGrd: "",
        Functional: "",
        Fireplaces: "",
        FireplaceQu: "",
        GarageType: "",
        GarageFinish: "",
        GarageCars: "",
        GarageQual: "",
        PavedDrive: "",
        WoodDeckSF: "",
        OpenPorchSF: "",
        EnclosedPorch: "",
        TSsnPorch: "",
        ScreenPorch: "",
        PoolArea: "",
        MiscVal: "",
        MoSold: "",
        YrSold: "",
        SaleType: "",
        SaleCondition: "",
    });

    const sectionRef = React.useRef(null);

    // Fonction pour défiler vers la section
    const handleScroll = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };


    const convertToArray = (data) => {
        const keysOrder = [
          'MSSubClass', 'MSZoning', 'LotFrontage', 'LotArea', 'Street', 
          'LotShape', 'LandContour', 'Utilities', 'LotConfig', 'LandSlope', 
          'Neighborhood', 'Condition1', 'Condition2', 'BldgType', 'HouseStyle', 
          'OverallQual', 'OverallCond', 'YearBuilt', 'YearRemodAdd', 'RoofStyle',
          'RoofMatl', 'Exterior1st', 'Exterior2nd', 'MasVnrType', 'MasVnrArea',
          'ExterQual', 'ExterCond', 'Foundation', 'BsmtQual', 'BsmtCond', 
          'BsmtExposure', 'BsmtFinType1', 'BsmtFinSF1', 'BsmtFinSF2',
          'BsmtUnfSF', 'TotalBsmtSF', 'Heating', 'HeatingQC', 'CentralAir', 
          'Electrical', 'FstFlrSF', 'SndFlrSF', 'LowQualFinSF', 'GrLivArea', 
          'BsmtFullBath', 'BsmtHalfBath', 'FullBath', 'HalfBath', 'BedroomAbvGr', 
          'KitchenAbvGr', 'KitchenQual', 'TotRmsAbvGrd', 'Functional', 'Fireplaces', 
          'FireplaceQu', 'GarageType', 'GarageFinish', 'GarageCars', 'GarageQual',
          'PavedDrive', 'WoodDeckSF', 'OpenPorchSF', 'EnclosedPorch', 
          'TSsnPorch', 'ScreenPorch', 'PoolArea', 
          'MiscVal', 'MoSold', 'YrSold', 'SaleType', 'SaleCondition'
        ];
      
        return keysOrder.map(key => {
          const value = data[key];
          // Convertir les chaînes vides en `null` ou NaN si nécessaire
          return value === "" || value ===  undefined ? NaN : value;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setAlertModal(true)
        const resultArray = convertToArray(data);
        // Créer un objet structuré pour l'envoi
        if (!resultArray || resultArray.length === 0) {
            console.error('Data array is empty or invalid');
            return;
        }
        const payload = { parameters: resultArray };
        // setAlert(true)
        // setModal(true)
        console.log("Data=================>",data);
        console.log("Payload::::::::::::::::::::::",payload);
        fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(result => {
            console.log("Result---------------:",result.prix_predit);
            setPredictPrice(result.prix_predit)
            setAlertModal(false);
            setLoading(false);
            setAlert(true);
            setModal(true);
        })
        .catch(error => console.error('Error:', error));
    }

    const renderSelectField = (id, label, width, options = []) => (
        <FormGroup className={"col-md-"+width}>
            <label htmlFor={id} id={id}>
                {id + " : " + label}
            </label>
            <UncontrolledTooltip placement="top" target={id} delay={0}>
                {label}
            </UncontrolledTooltip>
            <Input
                id={id}
                type="select"
                value={data[id]}
                onChange={(e) =>
                    setSelectedData((prevData) => ({
                        ...prevData,
                        [id]: e.target.value,
                    }))
                }
            >
                <option value="">Choose...</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Input>
        </FormGroup>
    );

    const renderInputField = (id, label, width, type = "number") => (
        <FormGroup className={"col-md-"+width}>
            <label htmlFor={id} id={id}>
                {id + " : " + label}
            </label>
            <UncontrolledTooltip placement="top" target={id} delay={0}>
                {label}
            </UncontrolledTooltip>
            <Input
                id={id}
                placeholder={id + " ..."}
                type={type}
                value={data[id]}
                onChange={(e) =>
                    setSelectedData((prevData) => ({
                        ...prevData,
                        [id]: e.target.value,
                    }))
                }
            />
        </FormGroup>
    );

    const renderDateField = (id, label, format, width) => (
        <FormGroup className={"col-md-"+width}>
            <label htmlFor={id} id={id} className="text-info">
                {id + " : " + label}
            </label>
            <UncontrolledTooltip placement="top" target={id} delay={0}>
                {label}
            </UncontrolledTooltip>
            <Datetime
                inputProps={{ placeholder: id }}
                dateFormat={format}
                timeFormat={false}
                onChange={(e) =>
                    setSelectedData((prevData) => ({
                        ...prevData,
                        [id]: e.format(`${format}`),
                    }))
                }
            />
        </FormGroup>
    );

    const renderRadioButton = (id, label, width, options = []) => (
        <FormGroup className={"col-md-" + width}>
            <label htmlFor={id} id={id}>
                {id + " : " + label}
            </label>
            <UncontrolledTooltip placement="top" target={id} delay={0}>
                {label}
            </UncontrolledTooltip>
            {options.map((option) => (
                <FormGroup key={option.value} check className="form-check-radio text-primary">
                    <Label check>
                        <Input
                            id={option.value}
                            name={id}
                            type="radio"
                            value={option.value}
                            checked={data[id] === option.value}
                            onChange={(e) =>
                                setSelectedData((prevData) => ({
                                    ...prevData,
                                    [id]: e.target.value,
                                }))
                            }
                        />
                        <span className="form-check-sign"></span>
                        {option.label}
                    </Label>
                </FormGroup>
            ))}
        </FormGroup>
    );
    


    return (
        <Container style={{ backgroundColor: "white", padding: "3rem", width: "100%"}} className="content-center" >
            <Alert color="success" isOpen={alert} style={{width: "100%"}}>
                <Container>
                    <div className="alert-icon">
                    <i className="now-ui-icons ui-2_like"></i>
                    </div>
                    <strong>Well done!</strong> You successfully predict your house price. 
                    <button
                    type="button"
                    className="close"
                    onClick={() => setAlert(false)}
                    >
                    <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </span>
                    </button>
                </Container>
            </Alert>
            <Card>
                <div className="text-center" ref={sectionRef}>
                  <h2 className="text-info">
                    <br></br>House price estimation <br></br>
                  </h2>
                  <span>The price of the house is estimated at : </span>
                  <h4 style={{fontSize: 50, fontWeight: "600"}} className="text-primary">
                    {/* {predictPrice? Number(predictPrice.toFixed(2)) + " $ " : null} */}
                    {predictPrice ? <Price amount={predictPrice} currency="USD" locale="en-US" /> : null}
                    <br></br>
                    <br></br>
                  </h4>
                </div>
            </Card>
            <Card style={{ padding: "3rem", }}>
                <Form method="post" onSubmit={handleSubmit}>
                    <div className="form-row">
                        {renderSelectField("MSSubClass", "Identifies the type of dwelling involved in the sale", 6, MSSubClass)}
                        {renderSelectField("MSZoning", "Identifies the general zoning classification of the sale", 6, MSZoning)}
                        {renderInputField("LotFrontage", "Linear feet of street connected to property", 6)}
                        {renderInputField("LotArea", "Lot size in square feet", 6)}
                        {renderSelectField("Street", "Identifies the type of dwelling involved in the sale", 6, Street)}
                        {renderSelectField("LotShape", "General shape of property", 6, LotShape)}
                        {renderSelectField("LandContour", "Flatness of the property", 4, LandContour)}
                        {renderSelectField("Utilities", "Type of utilities available", 4, Utilities)}
                        {renderSelectField("LotConfig", "Lot configuration", 4, LotConfig)}
                        {renderSelectField("LandSlope", "Slope of property", 4, LandSlope)}
                        {renderSelectField("Neighborhood", "Physical locations within Ames city limits", 4, Neighborhood)}
                        {renderSelectField("Condition1", "Proximity to various conditions", 4, Condition1)}
                        {renderSelectField("Condition2", "Proximity to various conditions (if more than one is present)", 4, Condition2)}
                        {renderSelectField("BldgType", "Type of dwelling", 4, BldgType)}
                        {renderSelectField("HouseStyle", "Style of dwelling", 4, HouseStyle)}
                        {renderSelectField("OverallQual", "Rates the overall material and finish of the house", 6, OverallQual)}
                        {renderSelectField("OverallCond", "Rates the overall condition of the house", 6, OverallCond)}
                        {renderDateField("YearBuilt", "Original construction date", "YYYY", 6)}
                        {renderDateField("YearRemodAdd", "Remodel date (same as construction date...)", "YYYY", 6)}
                        {renderSelectField("RoofStyle", "Type of roof", 4, RoofStyle)}
                        {renderSelectField("RoofMatl", "Roof material", 4, RoofMatl)}
                        {renderSelectField("Exterior1st", "Exterior covering on house", 4, Exterior1st)}
                        {renderSelectField("Exterior2nd", "Exterior covering on house (if more than one material)", 4, Exterior2nd)}
                        {renderSelectField("MasVnrType", "Masonry veneer type", 4, MasVnrType)}
                        {renderInputField("MasVnrArea", "Masonry veneer area in square feet", 4)}
                        {renderSelectField("ExterQual", "Quality of the material on the exterior", 4, ExterQual)}
                        {renderSelectField("ExterCond", "Condition of the material on the exterior", 4, ExterCond)}
                        {renderSelectField("Foundation", "Type of foundation", 4, Foundation)}
                        {renderSelectField("BsmtQual", "Height of the basement", 4, BsmtQual)}
                        {renderSelectField("BsmtCond", "General condition of the basement", 4, BsmtCond)}
                        {renderSelectField("BsmtExposure", "Walkout or garden level walls", 4, BsmtExposure)}
                        {renderSelectField("BsmtFinType1", "Rating of finished area (primary)", 4, BsmtFinType1)}
                        {/* {renderSelectField("BsmtFinType2", "Rating of finished area (secondary)", 4, BsmtFinType2)} */}
                        {renderInputField("BsmtFinSF1", "Type 1 finished square feet", 4)}
                        {renderInputField("BsmtFinSF2", "Type 2 finished square feet ", 4)}
                        {renderInputField("BsmtUnfSF", "Unfinished square feet of basement area", 4)}
                        {renderInputField("TotalBsmtSF", "Total square feet of basement area", 4)}
                        {renderSelectField("Heating", "Type of heating", 4, Heating)}
                        {renderSelectField("HeatingQC", "Heating quality and condition", 4, HeatingQC)}
                        {renderRadioButton("CentralAir", "Central air conditioning", 4, CentralAir)}
                        {renderSelectField("Electrical", "Electrical system", 4, Electrical)}
                        {renderInputField("FstFlrSF", "First Floor square feet", 4)}
                        {renderInputField("SndFlrSF", "Second floor square feet ", 4)}
                        {renderInputField("LowQualFinSF", "Low quality finished square feet (all floors)", 4)}
                        {renderInputField("GrLivArea", "Above grade (ground) living area square feet", 4)}
                        {renderInputField("BsmtFullBath", "Basement full bathrooms", 4)}
                        {renderInputField("BsmtHalfBath", "Basement half bathrooms ", 4)}
                        {renderInputField("FullBath", "Full bathrooms above grade", 4)}
                        {renderInputField("HalfBath", "Half baths above grade", 4)}
                        {renderInputField("BedroomAbvGr", "Bedrooms above grade (does NOT include basement bedrooms)", 4)}
                        {renderInputField("KitchenAbvGr", "Kitchen above grade", 4)}
                        {renderSelectField("KitchenQual", "Kitchen quality", 4, KitchenQual)}
                        {renderInputField("TotRmsAbvGrd", "Total rooms above grade (does not include bathrooms)", 4)}
                        {renderSelectField("Functional", "Home functionality (Assume typical unless deductions are warranted)", 4, Functional)}
                        {renderSelectField("Fireplaces", "Number of fireplaces", 4, Fireplaces)}
                        {renderSelectField("FireplaceQu", "Fireplace quality", 4, FireplaceQu)}
                        {renderSelectField("GarageType", "Type of garage", 4, GarageType)}
                        {renderSelectField("GarageFinish", "Garage interior finish", 4, GarageFinish)}
                        {renderInputField("GarageCars", "Size of garage in car capacity", 4)}
                        {renderSelectField("GarageQual", "Garage quality", 4, GarageQual)}
                        {/* {renderSelectField("GarageCond", "Garage condition", 4, GarageCond)} */}
                        {renderSelectField("PavedDrive", "Paved driveway", 4, PavedDrive)}
                        {renderInputField("WoodDeckSF", "Wood deck area in square feet", 4)}
                        {renderInputField("OpenPorchSF", "Open porch area in square feet ", 4)}
                        {renderInputField("EnclosedPorch", "Enclosed porch area in square feet", 4)}
                        {renderInputField("TSsnPorch", "Three season porch area in square feet", 4)}
                        {renderInputField("ScreenPorch", "Screen porch area in square feet", 4)}
                        {renderInputField("PoolArea", "Pool area in square feet", 4)}
                        {/* {renderSelectField("PoolQC", "Pool quality", 4, PoolQC)} */}
                        {/* {renderSelectField("Fence", "Fence quality", 4, Fence)} */}
                        {/* {renderSelectField("MiscFeature", "Miscellaneous feature", 4, MiscFeature)} */}
                        {renderInputField("MiscVal", "Value of miscellaneous feature", 4)}
                        {renderDateField("MoSold", "Month Sold (MM)", "MM", 4)}
                        {renderDateField("YrSold", "Year Sold (YYYY)", "YYYY", 4)}
                        {renderSelectField("SaleType", "Sale type", 4, SaleType)}
                        {renderSelectField("SaleCondition", "Sale condition", 4, SaleCondition)}
                    </div>
                    <Container className="text-center">
                        <Button 
                            color="info" 
                            type="submit" 
                            // onClick={() => handleSubmit} 
                            className="col-md-6"
                        >
                            Send request
                        </Button>
                    </Container>
                </Form>
            </Card>
            <Modal
                modalClassName="modal-mini modal-white"
                toggle={() => setModal(false)}
                isOpen={modal}
              >
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons ui-1_check text-primary"></i>
                  </div>
                </div>
                <ModalBody>
                  <p>You successfully predict your house price</p>
                  {/* <Price amount={predictPrice} currency="USD" locale="en-US" /> */}
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    className="btn-neutral"
                    color="info"
                    type="button"
                    onClick={() => {
                        setModal(false)
                        setAlert(false)
                        handleScroll();
                    }}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              <Modal
                style={{
                    flexDirection: "column",
                    width: "25%", 
                    height: "90%", 
                    // position: "fixed", 
                    // backgroundColor: "red",
                    paddingInline: 50,
                    alignSelf: "center", 
                    justifyContent: "center",
                    textAlign: "center",
                    justifyItems: "center",
                    alignContent: "center",
                    alignItems: "center",
                    overflowX: "clip"
                }}
                // modalClassName="modal modal-white"
                // toggle={() => setAlertModal(false)}
                isOpen={alertModal}
              >
                <span className="text-center mt-4">Please wait...</span>
                <ModalBody className="text-center">
                    <ClipLoader
                        color={"#03b1fc"}
                        loading={loading}
                        // cssOverride={override}
                        size={40}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </ModalBody>
                

              </Modal>
        </Container>
    );
}

export default FormComponent;
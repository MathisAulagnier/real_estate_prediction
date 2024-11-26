from flask import Flask, render_template, request
import sys
import os

# Ajoutez le chemin du projet pour importer les fonctions
sys.path.append('../home-data-for-ml-course')

from main import estimate_its_house

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def estimate_price():
    price = None
    if request.method == 'POST':
        # Récupérer les valeurs du formulaire
        form_data = [
            request.form['MSSubClass'],
            request.form['MSZoning'],
            request.form['LotFrontage'],
            request.form['LotArea'],
            request.form['Street'],
            request.form['LotShape'],
            request.form['LandContour'],
            request.form['Utilities'],
            request.form['LotConfig'],
            request.form['LandSlope'],
            request.form['Neighborhood'],
            request.form['Condition1'],
            request.form['Condition2'],
            request.form['BldgType'],
            request.form['HouseStyle'],
            request.form['OverallQual'],
            request.form['OverallCond'],
            request.form['YearBuilt'],
            request.form['YearRemodAdd'],
            request.form['RoofStyle'],
            request.form['RoofMatl'],
            request.form['Exterior1st'],
            request.form['Exterior2nd'],
            request.form['MasVnrType'],
            request.form['MasVnrArea'],
            request.form['ExterQual'],
            request.form['ExterCond'],
            request.form['Foundation'],
            request.form['BsmtQual'],
            request.form['BsmtCond'],
            request.form['BsmtExposure'],
            request.form['BsmtFinType1'],
            request.form['BsmtFinSF1'],
            request.form['BsmtFinSF2'],
            request.form['BsmtUnfSF'],
            request.form['TotalBsmtSF'],
            request.form['Heating'],
            request.form['HeatingQC'],
            request.form['CentralAir'],
            request.form['Electrical'],
            request.form['1stFlrSF'],
            request.form['2ndFlrSF'],
            request.form['LowQualFinSF'],
            request.form['GrLivArea'],
            request.form['BsmtFullBath'],
            request.form['BsmtHalfBath'],
            request.form['FullBath'],
            request.form['HalfBath'],
            request.form['BedroomAbvGr'],
            request.form['KitchenAbvGr'],
            request.form['KitchenQual'],
            request.form['TotRmsAbvGrd'],
            request.form['Functional'],
            request.form['Fireplaces'],
            request.form['FireplaceQu'],
            request.form['GarageType'],
            request.form['GarageFinish'],
            request.form['GarageCars'],
            request.form['GarageQual'],
            request.form['PavedDrive'],
            request.form['WoodDeckSF'],
            request.form['OpenPorchSF'],
            request.form['EnclosedPorch'],
            request.form['3SsnPorch'],
            request.form['ScreenPorch'],
            request.form['PoolArea'],
            request.form['MiscVal'],
            request.form['MoSold'],
            request.form['YrSold'],
            request.form['SaleType'],
            request.form['SaleCondition']

        ]
        
        try:
            price = estimate_its_house(form_data)
        except Exception as e:
            price = f"Erreur : {str(e)}"
    
    return render_template('index.html', price=price)

if __name__ == '__main__':
    app.run(debug=True)


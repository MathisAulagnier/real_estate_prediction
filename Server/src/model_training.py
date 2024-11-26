import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor, VotingRegressor
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_squared_error, r2_score
from xgboost import XGBRegressor

import joblib

def save_model(model, model_path):
    """Sauvegarde le modèle"""
    joblib.dump(model, model_path)
    print(f"Modèle sauvegardé dans {model_path}")

def train_random_forest(X, y, save=False, verbose=False):
    # Random Forest
    rfr = RandomForestRegressor()
    rfr_param_grid = {
        'max_depth': [5, 10, 15],
        'n_estimators': [100, 250, 500],
        'min_samples_split': [3, 5, 10]
    }
    rfr_grid = GridSearchCV(rfr, rfr_param_grid, cv=5, scoring='neg_mean_squared_error', n_jobs=-1)
    rfr_grid.fit(X, y)

    if verbose:
        print("Meilleurs paramètres:")
        print(rfr_grid.best_params_)
        print("Meilleur score:")
        print(np.sqrt(-1 * rfr_grid.best_score_))

    if save:
        save_model(rfr_grid.best_estimator_, 'random_forest_model.pkl')
    
    return rfr_grid.best_estimator_

def train_xgboost(X, y, save=False, verbose=False):
    # XGBoost
    xgb = XGBRegressor()
    xgb_param_grid = {
        'learning_rate': [0.01, 0.1, 0.2],
        'max_depth': [3, 5],
        'n_estimators': [100, 250, 500]
    }
    xgb_grid = GridSearchCV(xgb, xgb_param_grid, cv=5, scoring='neg_mean_squared_error', n_jobs=-1)
    xgb_grid.fit(X, y)

    if verbose:
        print("Meilleurs paramètres:")
        print(xgb_grid.best_params_)
        print("Meilleur score:")
        print(np.sqrt(-1 * xgb_grid.best_score_))
    
    if save:
        save_model(xgb_grid.best_estimator_, 'xgboost_model.pkl')
        
    return xgb_grid.best_estimator_

def train_ridge(X, y, save=False, verbose=False):
    # Ridge Regression
    ridge = Ridge()
    ridge_param_grid = {
        'alpha': [0.05, 0.1, 1, 3, 5],
        'solver': ['auto', 'svd', 'cholesky', 'lsqr', 'sparse_cg', 'sag', 'saga']
    }
    ridge_grid = GridSearchCV(ridge, ridge_param_grid, cv=5, scoring='neg_mean_squared_error', n_jobs=-1)
    ridge_grid.fit(X, y)

    if verbose:
        print("Meilleurs paramètres:")
        print(ridge_grid.best_params_)
        print("Meilleur score:")
        print(np.sqrt(-1 * ridge_grid.best_score_))

    if save:
        save_model(ridge_grid.best_estimator_, 'ridge_model.pkl')
        
    return ridge_grid.best_estimator_

def train_gradient_boosting(X, y, save=False, verbose=False):
    # Gradient Boosting
    gdr = GradientBoostingRegressor()
    gdr_param_grid = {
        'learning_rate': [0.01, 0.1, 0.001],
        'max_depth': [10, 15, 20],
        'n_estimators': [100, 250, 500, 1000],
        'min_samples_split': [10, 25, 50], 
        'max_features': [0.01, 0.1, 0.5]
    }
    gdr_grid = GridSearchCV(gdr, gdr_param_grid, cv=5, scoring='neg_mean_squared_error', n_jobs=-1)
    gdr_grid.fit(X, y)

    if verbose:
        print("Meilleurs paramètres:")
        print(gdr_grid.best_params_)
        print("Meilleur score:")
        print(np.sqrt(-1 * gdr_grid.best_score_))

    if save:
        save_model(gdr_grid.best_estimator_, 'gradient_boosting_model.pkl')
       
    return gdr_grid.best_estimator_

def train_models(X_preprocessed, y, save=False, verbose=False, verbose_list=[False, False, False, False], save_list=[False, False, False, False]):
    """Entraîne différents modèles et retourne le meilleur modèle"""
    X_train, X_test, y_train, y_test = train_test_split(X_preprocessed, y, test_size=0.2, random_state=25)

    # Random Forest
    rfr = train_random_forest(X_train, y_train, save=save_list[0], verbose=verbose_list[0])

    # XGBoost
    xgb = train_xgboost(X_train, y_train, save=save_list[1], verbose=verbose_list[1])

    # Ridge Regression
    ridge = train_ridge(X_train, y_train, save=save_list[2], verbose=verbose_list[2])

    # Gradient Boosting
    gdr = train_gradient_boosting(X_train, y_train, save=save_list[3], verbose=verbose_list[3])

    # Voting Regressor
    vr = VotingRegressor(
        estimators=[
            ('rfr', rfr), 
            ('xgb', xgb), 
            ('ridge', ridge), 
            ('gdr', gdr)
        ]
    )
    vr.fit(X_train, y_train)

    if verbose:
        y_pred_vr = vr.predict(X_test)
        mse = mean_squared_error(y_test, y_pred_vr)
        r2 = r2_score(y_test, y_pred_vr)
        print('__Modèle de Voting__')
        print("__Erreur quadratique moyenne__")
        print(mse)
        print("__Coefficient de détermination__")
        print(r2)

    if save:
        save_model(vr, 'voting_regressor_model.pkl')

    return vr

def save_model(model, model_path):
    """Sauvegarde le modèle"""
    path_abs = '../Models/' + model_path
    joblib.dump(model, path_abs)
    print(f"Modèle sauvegardé dans {path_abs}")
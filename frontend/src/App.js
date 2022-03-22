import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './Screens/SigninScreen';
import { signout } from './Actions/userActions';
import RegisterScreen from './Screens/RegisterScreen.js';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ProductListScreen from './Screens/ProductListScreen';
import AdminRoute from './components/PrivateRoute';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';

function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const signoutHandler = (e) => {
        dispatch(signout());
        localStorage.removeItem('userToken');
        localStorage.clear();
        <Redirect to="/"></Redirect>;
    };

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">
                            K.S.Rangasamy College of Technology
                        </Link>
                    </div>
                    <div className="header-links">
                        <Link to="/cart">
                            Cart
                            {cartItems.length > 0 && (
                                <span className="badge">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>

                        {userInfo ? (
                            <div className="dropdown">
                                <Link to="#">
                                    {userInfo.name}
                                    <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/profile">User Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderhistory">
                                            Order History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#signout"
                                            onClick={signoutHandler}
                                        >
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signin">Sign In</Link>
                        )}
                        {userInfo && userInfo.isAdmin && (
                            <div className="dropdown">
                                <Link to="#admin">
                                    Admin <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/productlist">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderlist">Orders</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>
                <main>
                    <AdminRoute
                        path="/productlist"
                        component={ProductListScreen}
                        exact
                    ></AdminRoute>
                    <AdminRoute
                        path="/orderlist"
                        component={OrderListScreen}
                    ></AdminRoute>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route
                        path="/product/:id"
                        component={ProductScreen}
                    ></Route>
                    <Route
                        path="/product/:id/edit"
                        component={ProductEditScreen}
                        exact
                    ></Route>
                    <Route path="/signin" component={SigninScreen}></Route>
                    <Route path="/register" component={RegisterScreen}></Route>
                    <Route
                        path="/shipping"
                        component={ShippingAddressScreen}
                    ></Route>
                    <Route path="/payment" component={PaymentScreen}></Route>
                    <Route
                        path="/placeorder"
                        component={PlaceOrderScreen}
                    ></Route>
                    <Route path="/order/:id" component={OrderScreen}></Route>
                    <Route
                        path="/orderhistory"
                        component={OrderHistoryScreen}
                    ></Route>
                    <Route path="/profile" component={ProfileScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">All rights reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;

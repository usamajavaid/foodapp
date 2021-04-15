import React from 'react';
export default function Header(props) {
  return (
    <header className="block row center" id="shooping-header">
      <div>
        <a href="/">
          <h1 id="shooping-header-brand">MicroStar</h1>
        </a>
      </div>
      <div>
      <a id="shopping-signin" href="/ReusableComponents/Login"> Login</a>
        <a id="shooping-cart-icon" href="#/cart" >
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}

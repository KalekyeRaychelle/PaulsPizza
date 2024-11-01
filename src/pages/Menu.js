import React from 'react';

const Menu = ({ fetchMenuData, menuData }) => {
    return (
        <div className='menu'>
            <div className='sect1' onClick={() => fetchMenuData('meat-pizza')}>
                <h3>MEAT PIZZA</h3>
            </div>
            <div className='sect2' onClick={() => fetchMenuData('vegan-pizza')}>
                <h3>VEGAN PIZZA</h3>
            </div>
            <div className='sect3' onClick={() => fetchMenuData('sides')}>
                <h3>SIDES</h3>
            </div>
            <div className='sect4' onClick={() => fetchMenuData('drinks')}>
                <h3>DRINKS</h3>
            </div>

            <div className="menu-items">
                {menuData.map((item) => (
                    <div key={item.id} className="menu-item">
                        <h4>{item.Name}</h4>
                        <p>{item.Description}</p>
                        <p>${item.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;

import React, {useEffect, useState} from 'react';

export const EffectDemo = (props) => {
    //State
    const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
    const [title,setTitle] = useState('useEffect() in Hooks');

    //useEffect
    // useEffect(() => {
    //     console.log('useEffect has been called!');
    //     setFullName({name:'TrungHC',familyName: 'HCT'});
    // });

    useEffect(() => {
      console.log(1);
      setInterval(() => {
        setTitle('test useEffect')
        setFullName({name:'TrungHC' , familyName:'HCT'})
      }, 3000)
      clearInterval()
    }, [props.age])

    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
    );
};

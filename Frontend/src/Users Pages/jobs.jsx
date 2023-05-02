import React  from 'react';



export default function Jobs(props){
    return(
    
        <div className='innerbox'>
            <div class="innerflex">
                <div className='logo'></div>
                <div className='texxt'>
                    <div className='Org'>{props.organization}</div>
                    <div className='JobTitle'>{props.job_Title}</div>
                    <div className="icons">
                        <div className='Address'>{props.Address}</div>
                        <div className='Salary'>{props.Salary}</div>
                        <div className='Time'>{props.Time}</div>
                    </div>
                    <div className="Description">{props.Description}</div>
                </div>
            </div>
        </div>
    
    );
}
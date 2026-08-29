// src/Arrays.jsx

const myArray = ['First App', 'Second App', 'Third App'] ;

function Arrays() {
    return (<>
        <ol>
        {
             myArray.map((item, index) => {
                  return <li key={index}> { item } </li>
             })
        }
        </ol>
    </>);
}

export default Arrays;
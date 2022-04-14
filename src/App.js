import './App.css';

function App() {
  return (
    <>
     <h1>Hello World</h1>
     <button className="btn">Button Primary</button>
     <button className="btn-outline">Button Outlined</button>
     <table>
         <thead>
            <tr>
            <th>SL No</th>
             <th>Name</th>
             <th>App</th>
            </tr>
         </thead>
         <tbody>
             <tr>
                 <td>1</td>
                 <td>Ashik</td>
                 <td>Facebook</td>
             </tr>
         </tbody>
     </table>
    </>
  );
}

export default App;

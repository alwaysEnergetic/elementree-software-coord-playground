 
import  {useState} from 'react';

const InputView = (props:any)=> {    
    //default boundary box to -0.489,151.28,50.236,51.686
    const [bboxNumber, setBboxInputValue] = useState({
        minLng:-0.489,
        minLat:151.28,
        maxLng:50.236,
        maxLat:51.686
    });
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setBboxInputValue(prevState => ({
            ...prevState,
            [name]: value
        }));
        props.setBbox(`${bboxNumber.minLng},${bboxNumber.minLat},${bboxNumber.maxLng},${bboxNumber.maxLat}`);
    };
        return(
        <div className="mt-5 mb-10 flex shadow border-blue-300 border-t border-bx py-5 w-11/12 rounded-lg mx-auto bg-white align-center">
            <div className="6/12">
            <label  className="leading-7 text-lg text-gray-600 lg:ml-3 leading-relaxed mb-8 font-bold">Enter Boundary Box</label>
            <div className="flex ">
            <input type="number" placeholder="min Longitude" data-testid="minLng" value={bboxNumber.minLng} name="minLng" onChange={handleChange} className="w-3/12 ml-2 mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            <input type="number" placeholder="min Latitude"  data-testid="minLat" value={bboxNumber.minLat} name="minLat" onChange={handleChange} className="w-3/12 ml-2 mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            <input type="number" placeholder="max Longitude" data-testid="maxLng" value={bboxNumber.maxLng} name="maxLng" onChange={handleChange} className="w-3/12 ml-2 mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            <input type="number" placeholder="max Longitude" data-testid="maxLat" value={bboxNumber.maxLat} name="maxLat" onChange={handleChange} className="w-3/12 ml-2 mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            </div>
       </div>           
        )
    }
export default InputView;
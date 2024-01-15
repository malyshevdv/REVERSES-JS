import { useInput} from './hooks'
import { useColorContext } from './color-context';


export default function ColorForm({onSubmit = f => f}){
    const {onNewColor} = useColorContext();
    const [titleProps, setTitle] = useInput('newColor')
    const [colorProps, setColor] = useInput('#000000')
    const submit = e => { 
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        setTitle("");
        setColor("");
        };
    
    
    return (
        <>
            <form onSubmit={submit}>
                <input type='text' {...titleProps}>

                </input>

                <input type='color' {...colorProps} >

                </input>
                
                <button>ADD COLOR</button>

            </form>

            <div onClick={()=> onNewColor(titleProps.value, colorProps.value)}>
                MY ADD
                </div>
        </>

    )
}


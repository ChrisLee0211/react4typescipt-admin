import * as React from "react";
import './index.scss';

type Props = {
    width: string,
    height: string,
    tips: string,
    type?: string,
    change(val:any):void,
    keyUp?(val:number):void
}

interface inputOpt {
    width: string,
    height: string,
    tips: string,
    type: string,
    inputValue: any,
    inputClass: string,
    labelClass: string,
    labelOffset: number
}

class ClassComponent extends React.Component<Props, inputOpt> {

    labelRef: React.RefObject<HTMLElement> = React.createRef();
    state: inputOpt = {
        width: '',
        height: '',
        tips: '',
        type: 'text',
        inputValue: '',
        labelOffset: 0,
        inputClass:'',
        labelClass:''
    }
    constructor(props:Props) {
        super(props);
        this.bindFocus = this.bindFocus.bind(this);
        this.bindBlur = this.bindBlur.bind(this);
        this.bindChange = this.bindChange.bind(this);
        this.bindKeyUp = this.bindKeyUp.bind(this);
    }

    /**
     * 初始化操作
     * @author chrislee
     * @since 2020/1/14
     */
    componentWillMount() {
        this.setState({
            width: this.props.width,
            height: this.props.height,
            tips: this.props.tips,
            type: this.props.type === undefined ? 'text' : this.props.type,
            inputClass: 'LT-inputStyle'
        })
    }

    componentDidMount() {
        if (this.labelRef.current) {
            let label_width: number = this.labelRef.current.offsetWidth;
            this.setState({
                labelOffset: label_width ? label_width + 40 : 0
            });
        } else {
            console.error('组件初始化错误')
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="LT-inputBody">
                <span 
                    className={this.state.labelClass} 
                    ref={this.labelRef} 
                    style={{ marginRight: '20px', transform: `translateX(${this.state.labelOffset}px)` }}
                    onMouseOver={()=>this.setState({inputClass:'LT-inputStyle LT-inputActive'})}
                    onMouseOut={()=>this.setState({inputClass:'LT-inputStyle'})}
                    onClick={()=>this.setState({inputClass:'LT-inputStyle LT-inputActive'})}
                    >{this.state.tips}</span>
                <input
                    value={this.state.inputValue}
                    type={this.state.type}
                    className={this.state.inputClass}
                    style={{width:this.state.width,height:this.state.height}}
                    onFocus={this.bindFocus}
                    onBlur={this.bindBlur}
                    onChange={this.bindChange}
                    onKeyUp={this.bindKeyUp}
                />
            </div>
        )
    }

    /**
     * 当输入框聚焦时触发
     * @auhor chrislee
     * @since 2020/1/14
     */
    bindFocus(e:React.FocusEvent<HTMLInputElement>) {
        this.setState({
            labelOffset: 0,
            inputClass:'LT-inputStyle LT-inputActive',
            labelClass: 'LT-inputLabel LT-labelActive'
        });
    }

    /**
     * 当输入框失去焦点时触发
     * @author chrislee
     * @since 2020/1/14
     */
    bindBlur(e:React.FocusEvent<HTMLInputElement>){
        if(this.state.inputValue.length < 1) {
            let label_width: number = this.labelRef.current?this.labelRef.current.offsetWidth:0;
            this.setState({
                labelOffset: label_width? label_width + 40 : 0
            });
        }else{}
        this.setState({
            inputClass: 'LT-inputStyle',
            labelClass: 'LT-inputLabel'
        })
    }

    /**
     * 当输入框输入内容改变时触发
     * @author chrislee
     * @since 2020/1/14
     */
    bindChange(e:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            inputValue:e.target.value
        })
        this.props.change(e.target.value)
    }

    /**
     * 当光标聚焦在输入框且键入键盘时触发
     * @author chrisleee
     * @Time 2020/3/5
     */
    bindKeyUp(e:React.KeyboardEvent<HTMLInputElement>){
        if(this.props.keyUp){
            this.props.keyUp(e.keyCode)
        }
    }

}

export default ClassComponent
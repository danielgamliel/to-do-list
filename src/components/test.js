const Details = ({task}) => {

    const text = !!task ? 'Update' : 'Create';
    return (
        <>
            <p>{text + ' Task'}</p> // Update task
            <input name={'task'} type={'text'} value={'ggg'}/>
            <input name={'category'} type={'text'} value={'hhhh'}/>
            <input type={'submit'} value={text}/> // Update
        </>
    )
}

const Form = ({children}) => {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Form>
         <Details onSubmit={onSubmit} />
        </Form>
    )
}


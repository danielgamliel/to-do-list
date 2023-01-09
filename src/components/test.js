// skip push ***

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

/*
  git status // shows the updated/deleted/created files ready to stage
  git add . // stage all updated/deleted/created files
  git commit -m "your commit msg here" // commit your files and ready to push
  git push // pushes your commit(code) to github
  

  changes (add)=> stage (commit)=> commit (push)=> push
*/



// brench - style  ✔✔
//css reset , box sizing- border box
//stack the create copmonent - fixed ✔✔
//flex/grid
// responsive 720 - list one at row , then 3, add stack in the bottom ✔✔
// html tags- what to choose
// media queary
//animation

//pull request
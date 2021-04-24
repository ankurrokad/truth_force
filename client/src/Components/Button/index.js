import { Button } from '@material-ui/core'

export default function SubmitButton(props) {
    return <Button
        onClick={() => props.onClick()}
        variant="outlined">
        {props.name}
    </Button>
}
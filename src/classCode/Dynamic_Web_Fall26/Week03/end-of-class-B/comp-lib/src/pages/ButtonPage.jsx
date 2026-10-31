import {GoBell, GoTrash} from 'react-icons/go'
import Button from '../components/Button'

const ButtonPage = () => {
  return (
    <>
      <h1 className="text-3xl mb-4">Button Page!</h1>
      <div className="mb-3">
        <Button primary onClick={() => console.log('Primary clicked!')}>
          <GoBell />
          Primary
        </Button>
      </div>
      <div className="mb-3">
        <Button secondary className="mt-8">
          Secondary
        </Button>
      </div>
      <div className="mb-3">
        <Button success>Success</Button>
      </div>
      <div className="mb-3">
        <Button danger>Danger</Button>
      </div>
      <div className="mb-3">
        <Button warning>Warning</Button>
      </div>
      <div className="mb-3">
        <Button danger outline>
          <GoTrash />
          Danger Outline
        </Button>
      </div>
      <div className="mb-3">
        <Button success rounded>
          Success Rounded
        </Button>
      </div>
      <div className="mb-3">
        <Button primary outline rounded>
          Primary Outline Rounded
        </Button>
      </div>
      {/* Only one color variant can be used at a time
      let's make a function to warn other devs if they accidentally do */}
      <div className="mb-3">
        <Button secondary rounded>
          Secondary Rounded
        </Button>
      </div>
      <h2 className="text-2xl mt-8 mb-4">Sizes</h2>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <Button primary small>
          Small
        </Button>
        <Button primary>Default</Button>
        <Button primary large>
          Large
        </Button>
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <Button danger outline small>
          <GoTrash />
          Small Delete
        </Button>
        <Button success rounded large>
          <GoBell />
          Large Rounded
        </Button>
      </div>
      {/* <button className="px-8 py-3 bg-blue-500 border border-blue-500 text-white">
        Click Me
      </button> */}
    </>
  )
}

export default ButtonPage

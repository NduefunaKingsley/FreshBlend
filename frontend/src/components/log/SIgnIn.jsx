import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import './log.css'

export default function SIgnIn() {
  return (
    <div className='signin'>
      <Container className="signin-container p-4 rounded">
        <h2 className="signin-title mb-4">Welcome Back!!</h2>
        <Form className="signin-form">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control type="email" id="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Form.Control type="password" id="password" placeholder="Enter your password" required />
          </Form.Group>

          <Button type="submit" variant="success" className="signin-button w-100 mb-3">
            Sign In
          </Button>

          <p className="signup-link text-center">
            Don't have an account? <Link to="/signup" className='link-signup'>Sign Up</Link>
          </p>
        </Form>
      </Container>
    </div>
  )
}

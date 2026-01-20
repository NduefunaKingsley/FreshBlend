import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { toast } from 'react-toastify'
import './log.css'

export default function SIgnIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    return newErrors
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    const newErrors = validateForm()
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fix the errors above', {
        position: 'top-right',
        autoClose: 2000,
      })
      return
    }

    setLoading(true)

    try {
      // Simulate API call - Replace with your actual authentication API
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Mock user data - In production, this would come from your backend
      const user = {
        id: 1,
        email: email,
        name: email.split('@')[0]
      }

      // Store user in localStorage (or use context/redux)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isLoggedIn', 'true')

      toast.success('✅ Sign in successful!', {
        position: 'bottom-right',
        autoClose: 2000,
      })

      // Redirect to home page
      navigate('/')
    } catch (error) {
      toast.error('Sign in failed. Please try again.', {
        position: 'bottom-right',
        autoClose: 2000,
      })
      console.error('Sign in error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='signin'>
      <Container className="signin-container p-4 rounded">
        <h2 className="signin-title mb-4">Welcome Back!!</h2>

        {/* Display general errors */}
        {Object.keys(errors).length > 0 && (
          <Alert variant="danger" className="mb-3">
            Please fix the errors below
          </Alert>
        )}

        <Form className="signin-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            {errors.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            {errors.password && (
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            className="signin-button w-100 mb-3"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>

          <p className="signup-link text-center">
            Don't have an account? <Link to="/signup" className='link-signup'>Sign Up</Link>
          </p>
        </Form>
      </Container>
    </div>
  )
}

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { toast } from 'react-toastify'
import './log.css'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Username validation - alphanumeric and underscore, 3-20 characters
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/
    return regex.test(username)
  }

  // Password strength validation
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password)
  }

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {}

    if (!username.trim()) {
      newErrors.username = 'Username is required'
    } else if (!validateUsername(username)) {
      newErrors.username = 'Username must be 3-20 characters (letters, numbers, underscore)'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number, and special character (@$!%*?&)'
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
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
      // Simulate API call - Replace with your actual registration API
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Mock user data - In production, this would come from your backend
      const newUser = {
        id: Date.now(),
        username: username,
        email: email,
        createdAt: new Date().toISOString()
      }

      // Store user in localStorage (or use context/redux)
      localStorage.setItem('user', JSON.stringify(newUser))
      localStorage.setItem('isLoggedIn', 'true')

      toast.success('✅ Account created successfully!', {
        position: 'bottom-right',
        autoClose: 2000,
      })

      // Redirect to home page
      navigate('/')
    } catch (error) {
      toast.error('Registration failed. Please try again.', {
        position: 'bottom-right',
        autoClose: 2000,
      })
      console.error('Registration error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container fluid className='signup d-flex align-items-center justify-content-center'>
      <Row className='w-100'>
        <Col xs={12} sm={10} md={6} lg={5} className='mx-auto'>
          <div className='signup-container'>
            <h1 className='text-center mb-4'>Create Account</h1>

            {/* Display general errors */}
            {Object.keys(errors).length > 0 && (
              <Alert variant="danger" className="mb-3">
                Please fix the errors below
              </Alert>
            )}

            <Form className='signup-form' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label htmlFor="username">Username:</Form.Label>
                <Form.Control 
                  type="text" 
                  id="username"
                  placeholder='Enter username (3-20 characters)'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={!!errors.username}
                />
                {errors.username && (
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control 
                  type="email" 
                  id="email"
                  placeholder='Enter your email'
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

              <Form.Group className='mb-3'>
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Form.Control 
                  type="password" 
                  id="password"
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                {errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                )}
                <small className="d-block mt-1 text-secondary">
                  {/* At least 8 characters with uppercase, lowercase, number & special character */}
                </small>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label htmlFor="confirmPassword">Confirm Password:</Form.Label>
                <Form.Control 
                  type="password" 
                  id="confirmPassword"
                  placeholder='Confirm your password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  isInvalid={!!errors.confirmPassword}
                />
                {errors.confirmPassword && (
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button 
                variant='success' 
                type='submit' 
                className='w-100 mb-3'
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Register'}
              </Button>
            </Form>

            <p className="signin-link text-center">
              Already have an account? <Link to="/signin" className='link-signin'>Sign In</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

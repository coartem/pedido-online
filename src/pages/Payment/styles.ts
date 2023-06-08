import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

    h4 {
      margin: 2.5rem 0 2rem;

      &:first-child {
        margin-top: 0;
      }
    }

    .grouped {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      width: 100%;
    }

    .field {
      flex-grow: 1;
      margin-bottom: 1rem;
    }

    label {
      display: block;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0.5rem;
    }
`

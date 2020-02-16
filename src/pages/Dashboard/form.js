import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import {
  Menu,
  RegisterLink,
  SubmitButton,
  FormGroup,
  Content,
  Container,
  Wrapper,
  SelectStyled,
} from './styles';
import {
  createRegister,
  updateRegister,
} from '../../store/modules/registers/action';
import Loader from '../../component/loader';
import api from '../../service/api';

export default function Dashboard() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const status = useSelector(state => state.registerReducer.status);
  const loading = useSelector(state => state.registerReducer.loading);

  useEffect(() => {
    if (status) {
      history.push('/');
    }
  }, [status, history]);

  useEffect(() => {
    async function handleGetStudent() {
      if (id) {
        const response = await api.get(`/register/${id}`);
        setRegister(response.data);
      }
    }
    handleGetStudent(id);
  }, [id]);

  const handleSubmitForm = async e => {
    e.preventDefault();
    dispatch(createRegister(register));
  };
  const handleEditForm = async e => {
    e.preventDefault();
    dispatch(updateRegister({ register, id }));
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={id ? handleEditForm : handleSubmitForm}>
          <Menu>
            <h1>Cadastro</h1>
            <aside>
              <RegisterLink to="/" color="#dad9d8">
                Voltar
              </RegisterLink>
              <SubmitButton>Salvar</SubmitButton>
            </aside>
          </Menu>
          {loading && <Loader />}
          <Content>
            <FormGroup>
              <b htmlFor="name">NOME COMPLETO</b>
              <input
                name="name"
                value={register.name}
                onChange={e =>
                  setRegister({ ...register, name: e.target.value })
                }
                id="name"
                placeholder="John Doe"
              />
              <b>ENDEREÇO </b>
              <input
                name="address"
                value={register.address}
                onChange={e =>
                  setRegister({ ...register, address: e.target.value })
                }
                placeholder="Rua das cove ..."
              />
              <b>CONTATO</b>
              <InputMask
                mask="(99)99999-9999"
                onChange={e =>
                  setRegister({ ...register, contact: e.target.value })
                }
                value={register.contact}
              />
              <b>DATA DE NASCIMENTO</b>
              <InputMask
                mask="99/99/9999"
                onChange={e =>
                  setRegister({ ...register, birthday: e.target.value })
                }
                value={register.birthday}
              />
              <b>STATUS</b>
              <SelectStyled
                value={register.status}
                onChange={e =>
                  setRegister({ ...register, status: e.target.value })
                }
              >
                <option>Selecione o status</option>
                <option value="ativo">ativo</option>
                <option value="excluido">excluido</option>
                <option value="inativo">inativo</option>
              </SelectStyled>
            </FormGroup>
          </Content>
        </form>
      </Container>
    </Wrapper>
  );
}

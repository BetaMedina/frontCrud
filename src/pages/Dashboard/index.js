import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import {
  Menu,
  RegisterLink,
  Table,
  Content,
  Container,
  Wrapper,
  DeleteButton,
  Excel,
} from './styles';
import Loader from '../../component/loader';
import {
  getRegisters,
  deleteRegister,
} from '../../store/modules/registers/action';

export default function Dashboard() {
  const [register, setRegister] = useState([]);

  const allRegisters = useSelector(state => state.registerReducer.registers);
  const loading = useSelector(state => state.registerReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allRegisters) {
      setRegister(allRegisters);
    }
  }, [allRegisters]);

  useEffect(() => {
    async function getAllRegisters() {
      dispatch(getRegisters());
    }
    getAllRegisters();
  }, [dispatch]);

  const handleDelete = async id => {
    dispatch(deleteRegister(id));

    setRegister(register.filter(res => res.code !== id));
  };

  return (
    <Wrapper>
      <Container>
        {loading && <Loader />}
        <Menu>
          <h1>Gerenciando de cadastro</h1>

          <aside>
            <Excel
              table="table-xls"
              filename="file-excell"
              sheet="sheet"
              buttonText="Exportar"
            />
            <RegisterLink to="/register">
              <MdAdd color="#fff" size={20} />
              Cadastrar
            </RegisterLink>
          </aside>
        </Menu>
        <Content>
          <Table id="table-xls">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Contato</th>
                <th>Nascimento</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {register.length > 0 &&
                register.map(res => (
                  <tr key={res.code}>
                    <td>{res.name}</td>
                    <td>{res.address}</td>
                    <td>{res.contact}</td>
                    <td>{res.birthday}</td>
                    <td>{res.status}</td>
                    <td>
                      <Link to={`register/${res.code}`}>editar</Link>
                      <DeleteButton onClick={() => handleDelete(res.code)}>
                        apagar
                      </DeleteButton>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Content>
      </Container>
    </Wrapper>
  );
}

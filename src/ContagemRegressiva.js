import { useEffect } from 'react';

function ContagemRegressiva() {
  // const [dias, setDias] = useState('00');
  // const [horas, setHoras] = useState('00');
  // const [minutos, setMinutos] = useState('00');
  // const [segundos, setSegundos] = useState('00');

  useEffect(() => {
    // const dataExpiracao = new Date('2023-04-01 00:00:00').getTime();

    const intervalId = setInterval(() => {
      // const agora = new Date().getTime();
      // const diferenca = dataExpiracao - agora;

      // const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      // const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      // const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      // const segundos = Math.floor((diferenca % (1000 * 60)) / 1000).toString().padStart(2, '0');

      // setDias(dias);
      // setHoras(horas);
      // setMinutos(minutos);
      // setSegundos(segundos);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="contagem-regressiva">
      {/* <p>PROMOÇÃO EXPIRA EM: {dias}d {horas}h {minutos}m {segundos}s</p> */}
      <p>PROMOÇÃO EXPIRA EM MENOS DE 15 MINUTOS</p>
    </div>
  );
}

export default ContagemRegressiva;
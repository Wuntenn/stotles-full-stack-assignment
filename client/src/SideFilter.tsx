type Props = {
  currentVal?: string;
  setterCB: (buyerSearch: string) => void; 
};

function SideFilter(props: Props) {
  const {currentVal, setterCB} = props;

  return (
    <input 
      style={{marginBottom: '10px'}}
      value={currentVal}
      placeholder="Filter buyers..."
      onChange={e => setterCB(e.target.value)}/>
  );
}
export default SideFilter;
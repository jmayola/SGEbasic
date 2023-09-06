const func = async () => {
  const res = await window.db.query();
  const data = document.getElementById("data");
  console.log(res)
  data.innerHTML = res.map((e, i) => {
    return `<div>
    <p>${res[i].curso}</p>
    <p>${res[i].division}</p>
    </div>    `;
  }).join('')
};
func();

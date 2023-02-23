const MyRevenue = () => {
	return (
		<div className="card bg-base-200 shadow-2xl min-w-1/2  rounded-none">
			<div className="card-body items-center text-center">
				<h2 className="card-title mb-2">My Revenue Distribution 💸</h2>
				<table className="table w-full bg-base-200 rounded-none">
					<tbody>
						<tr className="hover">
							<td>NFTs launched</td>
							<td>45</td>
						</tr>
						<tr className="hover">
							<td>Revenue</td>
							<td>5</td>
						</tr>
						<tr className="hover">
							<td>Radiohead</td>
							<td>10</td>
						</tr>
						<tr className="hover">
							<td>Superfans</td>
							<td>5</td>
						</tr>
						<tr className="hover">
							<td>Total</td>
							<td>20</td>
						</tr>
					</tbody>
				</table>
				<div className="card-actions">
					<button className="btn m-2">Withdraw</button>
				</div>
			</div>
		</div>
	);
};

export default MyRevenue;

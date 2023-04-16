SELECT ADDRESS
    FROM BALANCES B
        JOIN TRADES T ON
        B.ADDRESS = T.ADDRESS
    WHERE TRADES.BLOCK_HEIGHT > 73000
    GROUP BY B.ADDRESS
    HAVING SUM(
        CASE 
            WHEN b.denom = 'usdc' THEN b.amount * 0.000001
            WHEN b.denom = 'swth' THEN b.amount * 0.00000005
            WHEN b.denom = 'tmz' THEN b.amount * 0.003
        END
    ) >= 500;
    

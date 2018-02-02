DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory(
id SERIAL PRIMARY KEY,
name VARCHAR(240),
shelf VARCHAR(240),
bin INTEGER,
image VARCHAR(240),
price INTEGER
);

INSERT INTO inventory (name, shelf, bin, image, price)
VALUES
('item A1', 'A', 1, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 6),
('item A2', 'A', 2, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 4),
('item A3', 'A', 3, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 3),

('item B1', 'B', 1, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 10),

('item C1', 'C', 1, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 10),
('item C2', 'C', 2, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 7),
('item C3', 'C', 3, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 5),
('item C4', 'C', 4, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 12),
('item C5', 'C', 5, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 15),

('item D1', 'D', 1, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 9),
('item D2', 'D', 2, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 1),
('item D5', 'D', 5, 'http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/7831b963-e561-4cf4-8fa3-6ba3da5f4bd6/9c66489e-ffdc-4cf1-8e8a-f43372cdc936.jpg', 6);